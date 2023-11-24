import typia from "typia";

import { ArrayRecursiveUnionImplicit } from "../../../structures/pure/ArrayRecursiveUnionImplicit";
import { createAssertErrorBenchmarkProgram } from "../createAssertErrorBenchmarkProgram";

createAssertErrorBenchmarkProgram(
  typia.createAssert<ArrayRecursiveUnionImplicit[]>(),
);
