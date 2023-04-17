import typia from "typia";

import { ArrayRecursiveUnionExplicit } from "../../../../test/structures/ArrayRecursiveUnionExplicit";
import { createAssertErrorBenchmarkProgram } from "../createAssertErrorBenchmarkProgram";

createAssertErrorBenchmarkProgram(
    typia.createAssert<ArrayRecursiveUnionExplicit[]>(),
);
