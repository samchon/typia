import { createBenchmarkProgram } from "../createBenchmarkProgram";

export const createIsBenchmarkProgram = <T>(
    validator: (input: T) => boolean,
    skip?: (name: string) => boolean,
) => createBenchmarkProgram(1)(validator)(validator, skip);
