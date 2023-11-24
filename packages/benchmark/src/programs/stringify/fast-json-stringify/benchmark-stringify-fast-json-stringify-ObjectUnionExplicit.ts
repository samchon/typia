import typia from "typia";

import { ObjectUnionExplicit } from "../../../structures/pure/ObjectUnionExplicit";
import { createStringifyFastBenchmarkProgram } from "./createStringifyFastBenchmarkProgram";

createStringifyFastBenchmarkProgram(
  typia.json.application<[ObjectUnionExplicit], "ajv">(),
);
