import typia from "typia";

import { ArrayRecursive } from "../../../structures/pure/ArrayRecursive";
import { createStringifyFastBenchmarkProgram } from "./createStringifyFastBenchmarkProgram";

createStringifyFastBenchmarkProgram(
  typia.json.schemas<[ArrayRecursive], "3.0">(),
);
