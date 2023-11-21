import { ClassConstructor, plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";

import { createOptimizerBenchmarkProgram } from "../createOptimizerBenchmarkProgram";

export const createOptimizerClassValidatorBenchmarkProgram = <
  Schema extends object,
>(
  schema: ClassConstructor<Schema>,
) => {
  const validator = (input: unknown) => {
    const cla: Schema = plainToInstance(schema, input);
    return validateSync(cla).length === 0;
  };
  return createOptimizerBenchmarkProgram(validator);
};
