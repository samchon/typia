import { TSchema } from "@sinclair/typebox";
import { Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";

import { createAssertErrorBenchmarkProgram } from "../createAssertErrorBenchmarkProgram";

export const createAssertErrorTypeboxBenchmarkProgram = <S extends TSchema>(
  schema: S,
) => {
  const array = Type.Array(schema);
  const program = TypeCompiler.Compile(array);

  return createAssertErrorBenchmarkProgram((input) => {
    if (program.Check(input) === false) {
      const first = program.Errors(input).First();
      if (first) throw first;
    }
    return input;
  });
};
