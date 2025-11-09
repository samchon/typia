import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_FunctionalArrayUnion = (): void => _test_functional_assertEqualsFunction(CustomGuardError)(
  "FunctionalArrayUnion"
)(FunctionalArrayUnion)(
  (p: (input: FunctionalArrayUnion) => FunctionalArrayUnion) => typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)