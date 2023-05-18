import typia from "typia";

import { ArrayHierarchical } from "../../../../../test/structures/ArrayHierarchical";
import { createFastifyCustomServerBenchmarkProgram } from "../createFastifyCustomServerBenchmarkProgram";

createFastifyCustomServerBenchmarkProgram(
    typia.createStringify<ArrayHierarchical[]>(),
);
