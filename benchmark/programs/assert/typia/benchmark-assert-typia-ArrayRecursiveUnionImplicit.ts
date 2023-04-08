import typia from "typia";

import { ArrayRecursiveUnionImplicit } from "../../../../test/structures/ArrayRecursiveUnionImplicit";
import { createAssertBenchmarkProgram } from "../createAssertBenchmarkProgram";

createAssertBenchmarkProgram(
    typia.createAssert<ArrayRecursiveUnionImplicit>()
);