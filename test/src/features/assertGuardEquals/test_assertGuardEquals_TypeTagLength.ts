import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagLength } from "../../structures/TypeTagLength";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_TypeTagLength = _test_assertGuardEquals(
  TypeGuardError,
)("TypeTagLength")<TypeTagLength>(TypeTagLength)((input) =>
  typia.assertGuardEquals<TypeTagLength>(input),
);
