import { ObjectHierarchical } from "../../../structures/pure/ObjectHierarchical";
import { createStringifyBenchmarkProgram } from "../createStringifyBenchmarkProgram";

createStringifyBenchmarkProgram((value: ObjectHierarchical) =>
  JSON.stringify(value),
);
