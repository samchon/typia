import { createSuccessBenchmarkProgram } from "../createSuccessBenchmarkProgram";

export const createIsBenchmarkProgram = <T>(validator: (input: T) => boolean) =>
    createSuccessBenchmarkProgram(1)(validator)(validator);
