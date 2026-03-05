import typia from "typia";

import { ArraySimple } from "../../../structures/pure/ArraySimple";
import { createOptimizerBenchmarkProgram } from "../createOptimizerBenchmarkProgram";

createOptimizerBenchmarkProgram(typia.createIs<ArraySimple>());
