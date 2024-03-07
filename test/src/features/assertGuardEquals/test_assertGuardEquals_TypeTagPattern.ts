import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_TypeTagPattern = _test_assertGuardEquals(
  TypeGuardError,
)("TypeTagPattern")<TypeTagPattern>(TypeTagPattern)((input) =>
  typia.assertGuardEquals<TypeTagPattern>(input),
);
