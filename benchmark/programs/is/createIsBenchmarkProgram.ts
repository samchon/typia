import { createSuccessBenchmarkProgram } from "../createSuccessBenchmarkProgram";

export const createIsBenchmarkProgram = <T>(
    validator: (input: T) => boolean,
    skip?: (name: string) => boolean,
) => createSuccessBenchmarkProgram(1)(validator)(validator, skip);
