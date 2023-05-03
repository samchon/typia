import { ClassConstructor, plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";

import { createIsBenchmarkProgram } from "../createIsBenchmarkProgram";

export const createIsClassValidatorBenchmarkProgram = <Schema extends object>(
    schema: ClassConstructor<Schema>,
) => {
    const validator = (input: unknown) => {
        const cla: Schema = plainToInstance(schema, input);
        return validateSync(cla).length === 0;
    };
    return createIsBenchmarkProgram(validator);
};
