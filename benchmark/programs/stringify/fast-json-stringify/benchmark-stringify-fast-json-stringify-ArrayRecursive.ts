import typia from "typia";

import { ArrayRecursive } from "../../../../test/structures/ArrayRecursive";
import { createStringifyFastBenchmarkProgram } from "./createStringifyFastBenchmarkProgram";

createStringifyFastBenchmarkProgram(
    typia.application<[ArrayRecursive], "ajv">()
);