import { ClassConstructor } from "class-transformer";
import { validateSync } from "class-validator";

import { createIsBenchmarkProgram } from "../createIsBenchmarkProgram";

export const createIsClassValidatorBenchmarkProgram = <
  Schema extends ClassConstructor<any> & {
    validate: (input: any) => ReturnType<typeof validateSync>;
  },
>(
  schema: Schema,
) => createIsBenchmarkProgram((input) => schema.validate(input).length === 0);
