import { TSchema } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";

import { createOptimizerBenchmarkProgram } from "../createOptimizerBenchmarkProgram";

export const createOptimizerTypeboxBenchmarkProgram = <T extends TSchema>(
    schema: T,
) =>
    createOptimizerBenchmarkProgram((input: unknown) => {
        const program = TypeCompiler.Compile(schema);
        return program.Check(input);
    });
