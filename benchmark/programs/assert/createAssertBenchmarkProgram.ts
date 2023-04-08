import { createBenchmarkProgram } from "../createBenchmarkProgram";

export const createAssertBenchmarkProgram = <T>(assert: (input: T) => T) =>
    createBenchmarkProgram(assert)((input) => {
        try {
            assert(input);
            return true;
        } catch {
            return false;
        }
    });
