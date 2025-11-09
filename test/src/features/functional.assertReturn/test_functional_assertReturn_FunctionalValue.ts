import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { FunctionalValue } from "../../structures/FunctionalValue";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_FunctionalValue = (): void => _test_functional_assertReturn(TypeGuardError)(
  "FunctionalValue"
)(FunctionalValue)(
  (p: (input: FunctionalValue) => FunctionalValue) => typia.functional.assertReturn(p),
)