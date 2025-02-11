import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_assertGuardEquals_FunctionalValue = _test_assertGuardEquals(
  TypeGuardError,
)("FunctionalValue")<FunctionalValue>(FunctionalValue)((input) =>
  typia.assertGuardEquals<FunctionalValue>(input),
);
