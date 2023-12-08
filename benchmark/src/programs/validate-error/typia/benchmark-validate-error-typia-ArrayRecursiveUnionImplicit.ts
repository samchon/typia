import typia from "typia";

import { ArrayRecursiveUnionImplicit } from "../../../structures/pure/ArrayRecursiveUnionImplicit";
import { createValidateErrorBenchmarkProgram } from "../createValidateErrorBenchmarkProgram";

createValidateErrorBenchmarkProgram(
  typia.createValidate<ArrayRecursiveUnionImplicit[]>(),
);
