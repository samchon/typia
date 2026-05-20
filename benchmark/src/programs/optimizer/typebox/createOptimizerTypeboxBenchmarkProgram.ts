import { TSchema } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";

import { createOptimizerBenchmarkProgram } from "../createOptimizerBenchmarkProgram";

export const createOptimizerTypeboxBenchmarkProgram = <T extends TSchema>(
  schema: T,
) => {
  const program = TypeCompiler.Compile(schema);
  return createOptimizerBenchmarkProgram((input: unknown) =>
    program.Check(input),
  );
};
