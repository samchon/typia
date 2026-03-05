import { SafeParseReturnType, ZodTypeAny, array } from "zod";

import { createValidateErrorBenchmarkProgram } from "../createValidateErrorBenchmarkProgram";

export const createValidateErrorZodBenchmarkProgram = <
  Schema extends ZodTypeAny,
>(
  instance: Schema,
) => {
  const schema = array(instance);
  return createValidateErrorBenchmarkProgram((input) => {
    const result: SafeParseReturnType<any, any> = schema.safeParse(input);
    return result.success ? [] : result.error.errors;
  });
};
