import typia from "typia";

import { ArraySimple } from "../../../../test/structures/ArraySimple";
import { createOptimizerBenchmarkProgram } from "../createOptimizerBenchmarkProgram";

createOptimizerBenchmarkProgram(
    typia.createIs<ArraySimple>()
);