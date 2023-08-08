import { ZodTypeAny } from "zod";

import { createIsBenchmarkProgram } from "../createIsBenchmarkProgram";

export const createIsZodBenchmarkProgram = <Schema extends ZodTypeAny>(
    schema: Schema,
) => createIsBenchmarkProgram((input) => schema.safeParse(input).success);
