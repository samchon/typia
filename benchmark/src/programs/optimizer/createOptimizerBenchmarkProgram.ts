import { createSuccessBenchmarkProgram } from "../createSuccessBenchmarkProgram";

export const createOptimizerBenchmarkProgram = <T>(
  validator: (input: T) => boolean,
) => createSuccessBenchmarkProgram(1)(validator)(validator, () => true);
