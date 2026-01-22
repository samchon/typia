import typia from "typia";

import { ArrayRecursiveUnionImplicit } from "../../../structures/pure/ArrayRecursiveUnionImplicit";
import { createValidateBenchmarkProgram } from "../createValidateBenchmarkProgram";

createValidateBenchmarkProgram(
  typia.createValidate<ArrayRecursiveUnionImplicit>(),
);
