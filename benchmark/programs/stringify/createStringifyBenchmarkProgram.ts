import { createSuccessBenchmarkProgram } from "../createSuccessBenchmarkProgram";

export const createStringifyBenchmarkProgram = <T>(
    closure: null | ((input: T) => string | null),
) => {
    if (closure === null)
        return createSuccessBenchmarkProgram(0)(() => null)(() => false);

    const wrapper = (input: T) => {
        closure(input);
        closure(input);
        closure(input);
        closure(input);
    };
    return createSuccessBenchmarkProgram(4)(wrapper)(
        () => true,
        () => true,
    );
};
