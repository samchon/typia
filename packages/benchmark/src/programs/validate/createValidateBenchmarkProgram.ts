import typia from "typia";

import { createSuccessBenchmarkProgram } from "../createSuccessBenchmarkProgram";

export const createValidateBenchmarkProgram = <T>(
  validate: (input: T) => typia.IValidation | any[],
  skip?: (name: string) => boolean,
) =>
  createSuccessBenchmarkProgram(1)(validate)((input) => {
    const result = validate(input);
    return Array.isArray(result) ? result.length === 0 : result.success;
  }, skip);
