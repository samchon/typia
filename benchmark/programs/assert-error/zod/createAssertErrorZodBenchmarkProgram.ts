import { SafeParseReturnType, ZodTypeAny, array } from "zod";

import { createAssertErrorBenchmarkProgram } from "../createAssertErrorBenchmarkProgram";

export const createAssertErrorZodBenchmarkProgram = <Schema extends ZodTypeAny>(
    instance: Schema,
) => {
    const schema = array(instance);
    return createAssertErrorBenchmarkProgram((input) => {
        const result: SafeParseReturnType<any, any> = schema.safeParse(input);
        if (!result.success) throw new Error(result.error.errors[0].message);
        return input;
    });
};
