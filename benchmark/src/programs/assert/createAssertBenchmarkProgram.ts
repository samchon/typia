import { createSuccessBenchmarkProgram } from "../createSuccessBenchmarkProgram";

export const createAssertBenchmarkProgram = <T>(
  assert: (input: T) => T,
  skip?: (name: string) => boolean,
) =>
  createSuccessBenchmarkProgram(1)(assert)((input) => {
    try {
      assert(input);
      return true;
    } catch {
      return false;
    }
  }, skip);
