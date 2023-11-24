import typia from "typia";

import { ArrayHierarchical } from "../../../structures/pure/ArrayHierarchical";
import { createStringifyBenchmarkProgram } from "../createStringifyBenchmarkProgram";

createStringifyBenchmarkProgram(
  typia.json.createStringify<ArrayHierarchical>(),
);
