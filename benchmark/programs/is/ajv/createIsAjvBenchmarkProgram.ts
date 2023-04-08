import { createIsBenchmarkProgram } from "../createIsBenchmarkProgram";

export const createIsAjvBenchmarkProgram = (schema: {
    Check: (input: unknown) => boolean;
}) => createIsBenchmarkProgram((input) => schema.Check(input));
