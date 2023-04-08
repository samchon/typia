import { ClassConstructor, plainToInstance } from "class-transformer";
import { ValidationError, validateSync } from "class-validator";

import { createBenchmarkProgram } from "../../createBenchmarkProgram";

export const createValidateClassValidatorBenchmarkProgram = <
    Schema extends object,
>(
    schema: ClassConstructor<Schema>,
) => {
    return createBenchmarkProgram((input) => {
        const cla: Schema = plainToInstance(schema, input);
        return validateSync(cla);
    })(
        (input) => {
            const cla: Schema = plainToInstance(schema, input);
            const result: ValidationError[] = validateSync(cla);
            return result.length === 0;
        },
        (name) => !name.includes("implicit") && !name.includes("ultimiate"),
    );
};
