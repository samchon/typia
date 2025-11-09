import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_FunctionalPropertyUnion = (): void => _test_functional_assertEqualsFunction(TypeGuardError)(
  "FunctionalPropertyUnion"
)(FunctionalPropertyUnion)(
  (p: (input: FunctionalPropertyUnion) => FunctionalPropertyUnion) => typia.functional.assertEqualsFunction(p),
)