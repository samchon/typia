import { ClassConstructor } from "class-transformer";
import { validateSync } from "class-validator";

import { createValidateErrorBenchmarkProgram } from "../createValidateErrorBenchmarkProgram";

export const createValidateErrorClassValidatorBenchmarkProgram = <
    Schema extends ClassConstructor<any> & {
        transform: (input: any) => any;
        validate: (input: any) => ReturnType<typeof validateSync>;
    },
>(
    schema: Schema,
) =>
    createValidateErrorBenchmarkProgram((input: any[]) =>
        schema
            .transform(input)
            .map((v: any[]) => schema.validate(v))
            .flat(),
    );
