import { createFailureBenchmarkProgram } from "../createFailureBenchmarkProgram";

export const createAssertErrorBenchmarkProgram = <T>(
    assert: (input: T[]) => T[],
    skip?: (name: string) => boolean,
) =>
    createFailureBenchmarkProgram<T>((input) => {
        try {
            assert(input);
        } catch {}
    })((input) => {
        try {
            assert(input);
            return true;
        } catch {
            return false;
        }
    }, skip);
