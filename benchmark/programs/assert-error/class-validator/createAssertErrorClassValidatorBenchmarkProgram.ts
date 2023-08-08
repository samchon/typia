import { ClassConstructor } from "class-transformer";
import { ValidationError, validateSync } from "class-validator";

import { createAssertErrorBenchmarkProgram } from "../createAssertErrorBenchmarkProgram";

export const createAssertErrorClassValidatorBenchmarkProgram = <
    Schema extends ClassConstructor<any> & {
        transform: (input: any) => any;
        validate: (input: any) => ReturnType<typeof validateSync>;
    },
>(
    schema: Schema,
) =>
    createAssertErrorBenchmarkProgram((input: any) => {
        const result: ValidationError[] = schema
            .transform(input)
            .map((v: any[]) => schema.validate(v))
            .flat();
        if (result.length) throw new Error(JSON.stringify(result[0]));
        return input;
    });
