import typia from "typia";

import { ArrayRecursive } from "../../../structures/pure/ArrayRecursive";
import { createAssertErrorBenchmarkProgram } from "../createAssertErrorBenchmarkProgram";

createAssertErrorBenchmarkProgram(typia.createAssert<ArrayRecursive[]>());
