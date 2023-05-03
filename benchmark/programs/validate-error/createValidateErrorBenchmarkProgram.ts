import typia from "typia";

import { createFailureBenchmarkProgram } from "../createFailureBenchmarkProgram";

export const createValidateErrorBenchmarkProgram = <T>(
    validate: (input: T[]) => typia.IValidation | any[],
    skip?: (name: string) => boolean,
) =>
    createFailureBenchmarkProgram(validate)((input) => {
        const result = validate(input);
        return Array.isArray(result) ? result.length === 0 : result.success;
    }, skip);
