import { createBenchmarkProgram } from "../createBenchmarkProgram";

export const createStringifyBenchmarkProgram = <T>(
    closure: null | ((input: T) => string | null),
) => {
    if (closure === null)
        return createBenchmarkProgram(0)(() => null)(() => false);

    const wrapper = (input: T) => {
        closure(input);
        closure(input);
        closure(input);
        closure(input);
    };
    return createBenchmarkProgram(4)(wrapper)(
        () => true,
        () => true,
    );
};
