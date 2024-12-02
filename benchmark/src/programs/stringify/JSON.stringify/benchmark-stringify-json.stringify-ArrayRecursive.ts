import { ArrayRecursive } from "../../../structures/pure/ArrayRecursive";
import { createStringifyBenchmarkProgram } from "../createStringifyBenchmarkProgram";

createStringifyBenchmarkProgram((value: ArrayRecursive) =>
  JSON.stringify(value),
);
