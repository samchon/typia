import typia from "typia";

import { ArrayRecursive } from "../../../../../test/structures/ArrayRecursive";
import { createExpressServerBenchmarkProgram } from "../createExpressServerBenchmarkProgram";

createExpressServerBenchmarkProgram(
    typia.createStringify<ArrayRecursive[]>(),
);