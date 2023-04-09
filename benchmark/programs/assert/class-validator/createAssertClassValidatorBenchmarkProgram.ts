import { ClassConstructor, plainToInstance } from "class-transformer";
import { ValidationError, validateSync } from "class-validator";

import { createAssertBenchmarkProgram } from "../createAssertBenchmarkProgram";

export const createAssertClassValidatorBenchmarkProgram = <
    Schema extends object,
>(
    schema: ClassConstructor<Schema>,
) =>
    createAssertBenchmarkProgram(
        (input) => {
            const cla: Schema = plainToInstance(schema, input);
            const result: ValidationError[] = validateSync(cla);

            if (result.length) throw new Error(JSON.stringify(result[0]));
            return input;
        },
        // (name) => !name.includes("Implicit") && !name.includes("Ultimiate"),
    );
