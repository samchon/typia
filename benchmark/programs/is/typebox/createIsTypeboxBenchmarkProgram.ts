import { TSchema } from "@sinclair/typebox";
import { TypeCheck } from "@sinclair/typebox/compiler";

import { createIsBenchmarkProgram } from "../createIsBenchmarkProgram";

export const createIsTypeboxBenchmarkProgram = <S extends TSchema>(
    schema: TypeCheck<S>,
) => createIsBenchmarkProgram((input) => schema.Check(input));
