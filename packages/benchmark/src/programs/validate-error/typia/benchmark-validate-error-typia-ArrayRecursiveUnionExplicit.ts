import typia from "typia";

import { ArrayRecursiveUnionExplicit } from "../../../structures/pure/ArrayRecursiveUnionExplicit";
import { createValidateErrorBenchmarkProgram } from "../createValidateErrorBenchmarkProgram";

createValidateErrorBenchmarkProgram(
  typia.createValidate<ArrayRecursiveUnionExplicit[]>(),
);
