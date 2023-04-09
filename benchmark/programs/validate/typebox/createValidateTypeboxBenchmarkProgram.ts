import { TSchema } from "@sinclair/typebox";
import { TypeCheck } from "@sinclair/typebox/compiler";

import { createValidateBenchmarkProgram } from "../createValidateBenchmarkProgram";

export const createValidateTypeboxBenchmarkProgram = <S extends TSchema>(
    schema: TypeCheck<S>,
) =>
    createValidateBenchmarkProgram((input) => {
        if (schema.Check(input) === true) return [];
        return [...schema.Errors(input)];
    });
