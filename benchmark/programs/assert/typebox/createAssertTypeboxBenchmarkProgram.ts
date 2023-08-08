import { TSchema } from "@sinclair/typebox";
import { TypeCheck } from "@sinclair/typebox/compiler";

import { createAssertBenchmarkProgram } from "../createAssertBenchmarkProgram";

export const createAssertTypeboxBenchmarkProgram = <S extends TSchema>(
    program: TypeCheck<S>,
) =>
    createAssertBenchmarkProgram((input) => {
        if (program.Check(input) === false) {
            const first = program.Errors(input).First();
            if (first) throw first;
        }
        return input;
    });
