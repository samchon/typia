import typia from "typia";

import { ArrayHierarchical } from "../../../structures/pure/ArrayHierarchical";
import { createStringifyFastBenchmarkProgram } from "./createStringifyFastBenchmarkProgram";

createStringifyFastBenchmarkProgram(
  typia.json.application<[ArrayHierarchical], "ajv">(),
);
