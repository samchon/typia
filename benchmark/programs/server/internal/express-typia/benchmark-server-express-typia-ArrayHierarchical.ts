import typia from "typia";

import { ArrayHierarchical } from "../../../../../test/structures/ArrayHierarchical";
import { createExpressServerBenchmarkProgram } from "../createExpressServerBenchmarkProgram";

createExpressServerBenchmarkProgram(
    typia.createStringify<ArrayHierarchical[]>(),
);