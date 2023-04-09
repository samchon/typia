import { ClassConstructor, plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";

import { createValidateBenchmarkProgram } from "../createValidateBenchmarkProgram";

export const createValidateClassValidatorBenchmarkProgram = <
    Schema extends object,
>(
    schema: ClassConstructor<Schema>,
) =>
    createValidateBenchmarkProgram(
        (input) => {
            const cla: Schema = plainToInstance(schema, input);
            return validateSync(cla);
        },
        (name) => !name.includes("Implicit") && !name.includes("Ultimiate"),
    );
