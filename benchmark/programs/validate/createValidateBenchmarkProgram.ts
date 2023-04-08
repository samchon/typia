import typia from "typia";

import { createBenchmarkProgram } from "../createBenchmarkProgram";

export const createValidateBenchmarkProgram = <T>(
    validate: (input: T) => typia.IValidation | any[],
) =>
    createBenchmarkProgram(validate)((input) => {
        const result = validate(input);
        return Array.isArray(result) ? result.length === 0 : result.success;
    });
