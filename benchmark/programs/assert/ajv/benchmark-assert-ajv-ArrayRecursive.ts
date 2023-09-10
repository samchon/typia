import typia from "typia";

import { ArrayRecursive } from "../../../../test/structures/ArrayRecursive";
import { createAssertAjvBenchmarkProgram } from "./createAssertAjvBenchmarkProgram";

createAssertAjvBenchmarkProgram(
    typia.json.application<[ArrayRecursive], "ajv">(),
);
