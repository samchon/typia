import typia from "typia";

import { ArrayRecursive } from "../../../../test/structures/ArrayRecursive";
import { createValidateAjvBenchmarkProgram } from "./createValidateAjvBenchmarkProgram";

createValidateAjvBenchmarkProgram(
    typia.application<[ArrayRecursive], "ajv">(),
);