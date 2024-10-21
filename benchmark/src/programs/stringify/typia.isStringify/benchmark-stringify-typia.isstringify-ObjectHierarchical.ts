import typia from "typia";

import { ObjectHierarchical } from "../../../structures/pure/ObjectHierarchical";
import { createStringifyBenchmarkProgram } from "../createStringifyBenchmarkProgram";

createStringifyBenchmarkProgram(
  typia.json.createIsStringify<ObjectHierarchical>(),
);
