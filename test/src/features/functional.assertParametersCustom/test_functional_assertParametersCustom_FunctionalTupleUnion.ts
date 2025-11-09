import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_FunctionalTupleUnion = (): void => _test_functional_assertParameters(CustomGuardError)(
  "FunctionalTupleUnion"
)(FunctionalTupleUnion)(
  (p: (input: FunctionalTupleUnion) => FunctionalTupleUnion) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)