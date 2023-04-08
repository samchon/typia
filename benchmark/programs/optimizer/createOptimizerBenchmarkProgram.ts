import { createBenchmarkProgram } from "../createBenchmarkProgram";

export const createOptimizerBenchmarkProgram = <T>(
    validator: (input: T) => boolean,
) => createBenchmarkProgram(1)(validator)(validator, () => true);
