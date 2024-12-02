import { ArrayHierarchical } from "../../../structures/pure/ArrayHierarchical";
import { createStringifyBenchmarkProgram } from "../createStringifyBenchmarkProgram";

createStringifyBenchmarkProgram((value: ArrayHierarchical) =>
  JSON.stringify(value),
);
