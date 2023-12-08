import { z } from "zod";

import { ArrayRecursive } from "../../structures/pure/ArrayRecursive";

const Timestamp = z.object({
  time: z.number(),
  zone: z.number(),
});

const Category: z.ZodType<ArrayRecursive.ICategory> = z.lazy(() =>
  z.object({
    children: z.array(Category),
    id: z.number(),
    code: z.string(),
    sequence: z.number(),
    created_at: Timestamp,
  }),
);

export const ZodArrayRecursive = Category;
