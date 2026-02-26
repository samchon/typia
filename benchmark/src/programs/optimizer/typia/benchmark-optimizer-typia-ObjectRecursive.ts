import typia from "typia";

import { ObjectRecursive } from "../../../structures/pure/ObjectRecursive";
import { createOptimizerBenchmarkProgram } from "../createOptimizerBenchmarkProgram";

createOptimizerBenchmarkProgram(typia.createIs<ObjectRecursive>());
