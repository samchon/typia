import typia from "typia";

import { ArrayHierarchical } from "../../../../test/structures/ArrayHierarchical";
import { createStringifyFastBenchmarkProgram } from "./createStringifyFastBenchmarkProgram";

createStringifyFastBenchmarkProgram(
  typia.json.application<[ArrayHierarchical], "ajv">(),
);
