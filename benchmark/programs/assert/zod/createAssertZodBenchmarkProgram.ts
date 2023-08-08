import { SafeParseReturnType, ZodTypeAny } from "zod";

import { createAssertBenchmarkProgram } from "../createAssertBenchmarkProgram";

export const createAssertZodBenchmarkProgram = <Schema extends ZodTypeAny>(
    schema: Schema,
) =>
    createAssertBenchmarkProgram((input) => {
        const result: SafeParseReturnType<any, any> = schema.safeParse(input);
        if (!result.success) throw new Error(result.error.errors[0].message);
        return input;
    });
