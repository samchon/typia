import typia from "typia";

import { ObjectSimple } from "../../../structures/pure/ObjectSimple";
import { createOptimizerBenchmarkProgram } from "../createOptimizerBenchmarkProgram";

createOptimizerBenchmarkProgram(typia.createIs<ObjectSimple>());
