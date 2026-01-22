import typia from "typia";

import { ObjectUnionImplicit } from "../../../structures/pure/ObjectUnionImplicit";
import { createValidateErrorBenchmarkProgram } from "../createValidateErrorBenchmarkProgram";

createValidateErrorBenchmarkProgram(
  typia.createValidate<ObjectUnionImplicit[]>(),
);
