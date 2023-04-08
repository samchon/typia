import { SafeParseReturnType, ZodTypeAny } from "zod";

import { createValidateBenchmarkProgram } from "../createValidateBenchmarkProgram";

export const createValidateZodBenchmarkProgram = <Schema extends ZodTypeAny>(
    schema: Schema,
) =>
    createValidateBenchmarkProgram((input) => {
        const result: SafeParseReturnType<any, any> = schema.safeParse(input);
        return result.success ? [] : result.error.errors;
    });
