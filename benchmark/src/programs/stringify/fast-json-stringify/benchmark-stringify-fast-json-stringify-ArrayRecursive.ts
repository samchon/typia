import typia from "typia";

import { ArrayRecursive } from "../../../structures/pure/ArrayRecursive";
import { createStringifyFastBenchmarkProgram } from "./createStringifyFastBenchmarkProgram";

createStringifyFastBenchmarkProgram(
  typia.json.application<[ArrayRecursive], "ajv">(),
);
