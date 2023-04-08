import { createBenchmarkProgram } from "../createBenchmarkProgram";

export const createOptimizerBenchmarkProgram = <T>(
    validator: (input: T) => boolean,
) => createBenchmarkProgram(validator)(validator, () => true);
