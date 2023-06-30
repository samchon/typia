import typia from "typia";

import { ArrayRecursive } from "../../../../test/structures/ArrayRecursive";
import { createOptimizerBenchmarkProgram } from "../createOptimizerBenchmarkProgram";

createOptimizerBenchmarkProgram(typia.createIs<ArrayRecursive>());
