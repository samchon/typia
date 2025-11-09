import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_FunctionalObjectUnion = (): void => _test_functional_assertParameters(CustomGuardError)(
  "FunctionalObjectUnion"
)(FunctionalObjectUnion)(
  (p: (input: FunctionalObjectUnion) => FunctionalObjectUnion) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)