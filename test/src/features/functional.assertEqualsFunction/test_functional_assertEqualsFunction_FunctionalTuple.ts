import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_FunctionalTuple = _test_functional_assertEqualsFunction(TypeGuardError)(
  "FunctionalTuple"
)(FunctionalTuple)(
  (p: (input: FunctionalTuple) => FunctionalTuple) => typia.functional.assertEqualsFunction(p),
)