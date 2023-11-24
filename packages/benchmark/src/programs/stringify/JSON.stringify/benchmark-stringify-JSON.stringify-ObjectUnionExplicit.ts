import { ObjectUnionExplicit } from "../../../structures/pure/ObjectUnionExplicit";
import { createStringifyBenchmarkProgram } from "../createStringifyBenchmarkProgram";

createStringifyBenchmarkProgram((value: ObjectUnionExplicit) =>
  JSON.stringify(value),
);
