import typia from "typia";

import { ObjectSimple } from "../../../../test/structures/ObjectSimple";
import { createOptimizerBenchmarkProgram } from "../createOptimizerBenchmarkProgram";

createOptimizerBenchmarkProgram(typia.createIs<ObjectSimple>());
