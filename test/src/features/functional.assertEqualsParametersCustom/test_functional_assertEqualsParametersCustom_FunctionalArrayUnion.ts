import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_FunctionalArrayUnion = _test_functional_assertEqualsParameters(CustomGuardError)(
  "FunctionalArrayUnion"
)(FunctionalArrayUnion)(
  (p: (input: FunctionalArrayUnion) => FunctionalArrayUnion) => typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)