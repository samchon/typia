import { z } from "zod";

import { ObjectRecursive } from "../../../test/structures/ObjectRecursive";

const Timestamp = z.object({
  time: z.number(),
  zone: z.number(),
});

const Department: z.ZodType<ObjectRecursive.IDepartment> = z.lazy(() =>
  z.object({
    parent: z.union([Department, z.null()]),
    id: z.number(),
    code: z.string(),
    name: z.string(),
    sequence: z.number(),
    created_at: Timestamp,
  }),
);

export const ZodObjectRecursive = Department;
