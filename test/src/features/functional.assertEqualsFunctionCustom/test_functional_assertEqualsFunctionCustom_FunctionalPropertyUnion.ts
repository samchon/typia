import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_FunctionalPropertyUnion = (): void => _test_functional_assertEqualsFunction(CustomGuardError)(
  "FunctionalPropertyUnion"
)(FunctionalPropertyUnion)(
  (p: (input: FunctionalPropertyUnion) => FunctionalPropertyUnion) => typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)