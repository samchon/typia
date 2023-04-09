import { ClassConstructor, plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";

import { createSuccessBenchmarkProgram } from "../../createSuccessBenchmarkProgram";

export const createOptimizerClassValidatorBenchmarkProgram = <
    Schema extends object,
>(
    schema: ClassConstructor<Schema>,
) => {
    const validator = (input: unknown) => {
        const cla: Schema = plainToInstance(schema, input);
        return validateSync(cla).length === 0;
    };
    return createSuccessBenchmarkProgram(1)(validator)(
        (input: unknown) => validator(input),
        (name) => !name.includes("Implicit") && !name.includes("Ultimiate"),
    );
};
