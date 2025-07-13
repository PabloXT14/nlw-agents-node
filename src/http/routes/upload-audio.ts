import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod'
import z from 'zod/v4'
import { db } from '../../db/connection.ts'
import { schema } from '../../db/schema/index.ts'
import { generateEmbeddings, transcribeAudio } from '../../services/gemini.ts'

export const uploadAudioRoute: FastifyPluginCallbackZod = (app) => {
  app.post(
    '/rooms/:roomId/audio',
    {
      schema: {
        params: z.object({
          roomId: z.string(),
        }),
      },
    },
    async (req, reply) => {
      const { roomId } = req.params
      const audio = await req.file()

      if (!audio) {
        throw new Error('Audio is required.')
      }

      // 1. Transcrevendo audio com Gemini
      const audioBuffer = await audio.toBuffer() // carrega o audio inteiro em memória (em buffer) antes de transcrever
      const audioAsBase64 = audioBuffer.toString('base64')

      const transcription = await transcribeAudio(audioAsBase64, audio.mimetype)

      // 2. Gera o vetor semântico / embeddings
      const embeddings = await generateEmbeddings(transcription)

      // 3. Armazena os vetores no banco de dados
      const result = await db
        .insert(schema.audioChunks)
        .values({
          roomId,
          transcription,
          embeddings,
        })
        .returning()

      const chunk = result[0]

      if (!chunk) {
        throw new Error('Failed to create new chunk.')
      }

      return reply.status(201).send({
        chunkId: chunk.id,
      })
    }
  )
}
