import { z } from "zod";

export const UserSchema = z.object({
  id: z.bigint(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  remember_token: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type User = z.infer<typeof UserSchema>;

export const UserLoginSchema = z.object({
  email: z.string().min(1).email(),
  password: z.string().min(1),
});

export type UserLogin = z.infer<typeof UserLoginSchema>;
