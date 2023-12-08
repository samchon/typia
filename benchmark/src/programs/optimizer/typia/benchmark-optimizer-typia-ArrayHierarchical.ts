import typia from "typia";

import { ArrayHierarchical } from "../../../structures/pure/ArrayHierarchical";
import { createOptimizerBenchmarkProgram } from "../createOptimizerBenchmarkProgram";

createOptimizerBenchmarkProgram(typia.createIs<ArrayHierarchical>());
