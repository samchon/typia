import { ObjectUnionExplicit } from "../../../../test/structures/ObjectUnionExplicit";
import { createStringifyBenchmarkProgram } from "../createStringifyBenchmarkProgram";

createStringifyBenchmarkProgram((value: ObjectUnionExplicit) =>
  JSON.stringify(value),
);
