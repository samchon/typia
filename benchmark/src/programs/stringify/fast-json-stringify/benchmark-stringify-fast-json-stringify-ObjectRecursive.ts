import typia from "typia";

import { ObjectRecursive } from "../../../structures/pure/ObjectRecursive";
import { createStringifyFastBenchmarkProgram } from "./createStringifyFastBenchmarkProgram";

createStringifyFastBenchmarkProgram(
  typia.json.application<[ObjectRecursive], "3.0">(),
);
