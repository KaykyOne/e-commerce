import z from "zod";

const envSchema = z.object({
    NEXT_PUBLIC_API_BASE_URL: z.string(),
})

const parsedEnv = envSchema.safeParse(process.env)

if(!parsedEnv.success) {
    console.error("Invalid environment variables:", parsedEnv.error.flatten().fieldErrors)
    throw new Error("Invalid environment variables")
}

export const env = parsedEnv.data
export const API_BASE_URL = env.NEXT_PUBLIC_API_BASE_URL