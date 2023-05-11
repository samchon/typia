import typia from "typia";

import { ArrayRecursive } from "../../../../../test/structures/ArrayRecursive";
import { createFastifyServerBenchmarkProgram } from "../createFastifyServerBenchmarkProgram";

createFastifyServerBenchmarkProgram(
    typia.application<[ArrayRecursive[]], "ajv">(),
);
