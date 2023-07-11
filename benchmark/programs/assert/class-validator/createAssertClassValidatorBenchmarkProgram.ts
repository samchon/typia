import { ClassConstructor } from "class-transformer";
import { ValidationError, validateSync } from "class-validator";

import { createAssertBenchmarkProgram } from "../createAssertBenchmarkProgram";

export const createAssertClassValidatorBenchmarkProgram = <
    Schema extends ClassConstructor<any> & {
        validate: (input: any) => ReturnType<typeof validateSync>;
    },
>(
    schema: Schema,
) =>
    createAssertBenchmarkProgram((input) => {
        const result: ValidationError[] = schema.validate(input);
        if (result.length) throw new Error(JSON.stringify(result[0]));
        return input;
    });
