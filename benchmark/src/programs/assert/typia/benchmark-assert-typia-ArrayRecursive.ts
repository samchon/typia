import typia from "typia";

import { ArrayRecursive } from "../../../structures/pure/ArrayRecursive";
import { createAssertBenchmarkProgram } from "../createAssertBenchmarkProgram";

createAssertBenchmarkProgram(typia.createAssert<ArrayRecursive>());
