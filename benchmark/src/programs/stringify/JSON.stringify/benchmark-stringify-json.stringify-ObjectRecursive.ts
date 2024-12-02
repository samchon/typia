import { ObjectRecursive } from "../../../structures/pure/ObjectRecursive";
import { createStringifyBenchmarkProgram } from "../createStringifyBenchmarkProgram";

createStringifyBenchmarkProgram((value: ObjectRecursive) =>
  JSON.stringify(value),
);
