import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { FunctionalValue } from "../../structures/FunctionalValue";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_FunctionalValue = (): void => _test_functional_assertEqualsFunction(TypeGuardError)(
  "FunctionalValue"
)(FunctionalValue)(
  (p: (input: FunctionalValue) => FunctionalValue) => typia.functional.assertEqualsFunction(p),
)