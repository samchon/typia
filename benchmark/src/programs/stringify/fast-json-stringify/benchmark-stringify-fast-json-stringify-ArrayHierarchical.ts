import typia from "typia";

import { ArrayHierarchical } from "../../../structures/pure/ArrayHierarchical";
import { createStringifyFastBenchmarkProgram } from "./createStringifyFastBenchmarkProgram";

createStringifyFastBenchmarkProgram(
  typia.json.schemas<[ArrayHierarchical], "3.0">(),
);
