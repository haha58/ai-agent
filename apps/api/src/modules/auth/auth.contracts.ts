import { z } from 'zod'

export const passwordLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  deviceName: z.string().trim().min(1).max(100).optional(),
})

export const accessTokenResponseSchema = z.object({
  accessToken: z.string(),
  accessTokenExpiresAt: z.number().int(),
})