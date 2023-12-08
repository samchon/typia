import typia from "typia";

import { ObjectHierarchical } from "../../../structures/pure/ObjectHierarchical";
import { createOptimizerBenchmarkProgram } from "../createOptimizerBenchmarkProgram";

createOptimizerBenchmarkProgram(typia.createIs<ObjectHierarchical>());
