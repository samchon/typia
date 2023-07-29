import typia from "typia";

import { ObjectUnionExplicit } from "../../../../test/structures/ObjectUnionExplicit";
import { createOptimizerBenchmarkProgram } from "../createOptimizerBenchmarkProgram";

createOptimizerBenchmarkProgram(typia.createIs<ObjectUnionExplicit>());
