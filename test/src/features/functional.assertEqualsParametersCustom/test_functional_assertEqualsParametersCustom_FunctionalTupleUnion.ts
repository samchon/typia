import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_FunctionalTupleUnion = (): void => _test_functional_assertEqualsParameters(CustomGuardError)(
  "FunctionalTupleUnion"
)(FunctionalTupleUnion)(
  (p: (input: FunctionalTupleUnion) => FunctionalTupleUnion) => typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)