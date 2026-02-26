import { ArrayRecursiveUnionExplicit } from "../../../structures/pure/ArrayRecursiveUnionExplicit";
import { createStringifyBenchmarkProgram } from "../createStringifyBenchmarkProgram";

createStringifyBenchmarkProgram((value: ArrayRecursiveUnionExplicit) =>
  JSON.stringify(value),
);
