import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_assertGuardEquals_TypeTagArray = _test_assertGuardEquals(
  TypeGuardError,
)("TypeTagArray")<TypeTagArray>(TypeTagArray)((input) =>
  typia.assertGuardEquals<TypeTagArray>(input),
);
