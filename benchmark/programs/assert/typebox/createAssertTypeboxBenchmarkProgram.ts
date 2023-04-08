import { TSchema } from "@sinclair/typebox";
import { TypeCheck } from "@sinclair/typebox/compiler";

import { createAssertBenchmarkProgram } from "../createAssertBenchmarkProgram";

export const createAssertTypeboxBenchmarkProgram = <S extends TSchema>(
    schema: TypeCheck<S>,
) =>
    createAssertBenchmarkProgram((input) => {
        const first = schema.Errors(input).First();
        if (first) throw first;
        return input;
    });
