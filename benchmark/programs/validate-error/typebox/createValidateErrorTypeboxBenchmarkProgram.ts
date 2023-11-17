import { TSchema } from "@sinclair/typebox";
import { Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";

import { createValidateErrorBenchmarkProgram } from "../createValidateErrorBenchmarkProgram";

export const createValidateErrorTypeboxBenchmarkProgram = <S extends TSchema>(
  schema: S,
) => {
  const array = Type.Array(schema);
  const program = TypeCompiler.Compile(array);

  return createValidateErrorBenchmarkProgram((input) => {
    if (program.Check(input) === true) return [];
    return [...program.Errors(input)];
  });
};
