import typia from "typia";

import { ObjectUnionImplicit } from "../../../../test/structures/ObjectUnionImplicit";
import { createValidateErrorBenchmarkProgram } from "../createValidateErrorBenchmarkProgram";

createValidateErrorBenchmarkProgram(
  typia.createValidate<ObjectUnionImplicit[]>(),
);
