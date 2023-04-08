import { createBenchmarkProgram } from "../createBenchmarkProgram";

export const createAssertBenchmarkProgram = <T>(
    assert: (input: T) => T,
    skip?: (name: string) => boolean,
) =>
    createBenchmarkProgram(1)(assert)((input) => {
        try {
            assert(input);
            return true;
        } catch {
            return false;
        }
    }, skip);
