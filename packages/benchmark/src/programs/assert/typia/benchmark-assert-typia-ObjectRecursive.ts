import typia from "typia";

import { ObjectRecursive } from "../../../../test/structures/ObjectRecursive";
import { createAssertBenchmarkProgram } from "../createAssertBenchmarkProgram";

createAssertBenchmarkProgram(typia.createAssert<ObjectRecursive>());
