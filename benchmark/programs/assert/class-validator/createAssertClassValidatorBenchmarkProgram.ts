import { ClassConstructor, plainToInstance } from "class-transformer";
import { ValidationError, validateSync } from "class-validator";

import { createBenchmarkProgram } from "../../createBenchmarkProgram";

export const createAssertClassValidatorBenchmarkProgram = <
    Schema extends object,
>(
    schema: ClassConstructor<Schema>,
) => {
    return createBenchmarkProgram((input) => {
        const cla: Schema = plainToInstance(schema, input);
        const result: ValidationError[] = validateSync(cla);

        if (result.length) throw new Error(JSON.stringify(result[0]));
        return input;
    })(
        (input) => {
            const cla: Schema = plainToInstance(schema, input);
            const result: ValidationError[] = validateSync(cla);
            return result.length === 0;
        },
        (name) => !name.includes("implicit") && !name.includes("ultimiate"),
    );
};
