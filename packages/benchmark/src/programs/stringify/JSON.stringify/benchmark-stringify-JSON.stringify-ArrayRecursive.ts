import { ArrayRecursive } from "../../../../test/structures/ArrayRecursive";
import { createStringifyBenchmarkProgram } from "../createStringifyBenchmarkProgram";

createStringifyBenchmarkProgram((value: ArrayRecursive) =>
  JSON.stringify(value),
);
