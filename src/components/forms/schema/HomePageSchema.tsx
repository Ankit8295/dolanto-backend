import { z } from "zod";

export const cardSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.any().transform((files) => files[0]),
});

export const homePageFormSchema = z.object({
  data: z.array(cardSchema).nonempty().min(6).max(6),
});

export type CardSchema = z.infer<typeof cardSchema>;
export type HomePageFormSchema = z.infer<typeof homePageFormSchema>;
