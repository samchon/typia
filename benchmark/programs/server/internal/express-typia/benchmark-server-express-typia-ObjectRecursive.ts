import typia from "typia";

import { ObjectRecursive } from "../../../../../test/structures/ObjectRecursive";
import { createExpressServerBenchmarkProgram } from "../createExpressServerBenchmarkProgram";

createExpressServerBenchmarkProgram(typia.createStringify<ObjectRecursive[]>());
