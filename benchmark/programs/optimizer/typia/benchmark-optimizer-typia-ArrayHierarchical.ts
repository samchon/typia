import typia from "typia";

import { ArrayHierarchical } from "../../../../test/structures/ArrayHierarchical";
import { createOptimizerBenchmarkProgram } from "../createOptimizerBenchmarkProgram";

createOptimizerBenchmarkProgram(
    typia.createIs<ArrayHierarchical>()
);