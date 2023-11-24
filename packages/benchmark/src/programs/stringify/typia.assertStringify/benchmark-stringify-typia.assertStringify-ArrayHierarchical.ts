import typia from "typia";

import { ArrayHierarchical } from "../../../structures/pure/ArrayHierarchical";
import { createStringifyBenchmarkProgram } from "../createStringifyBenchmarkProgram";

createStringifyBenchmarkProgram(
  typia.json.createAssertStringify<ArrayHierarchical>(),
);
