import { ClassConstructor } from "class-transformer";
import { validateSync } from "class-validator";

import { createValidateBenchmarkProgram } from "../createValidateBenchmarkProgram";

export const createValidateClassValidatorBenchmarkProgram = <
  Schema extends ClassConstructor<any> & {
    validate: (input: any) => ReturnType<typeof validateSync>;
  },
>(
  schema: Schema,
) => createValidateBenchmarkProgram((input) => schema.validate(input));
