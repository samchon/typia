import typia from "typia";

import { ArrayRecursive } from "../../../../test/structures/ArrayRecursive";
import { createAssertErrorBenchmarkProgram } from "../createAssertErrorBenchmarkProgram";

createAssertErrorBenchmarkProgram(
    typia.createAssert<ArrayRecursive[]>()
);