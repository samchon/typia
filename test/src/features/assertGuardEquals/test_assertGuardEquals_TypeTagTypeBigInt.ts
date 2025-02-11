import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_assertGuardEquals_TypeTagTypeBigInt = _test_assertGuardEquals(
  TypeGuardError,
)("TypeTagTypeBigInt")<TypeTagTypeBigInt>(TypeTagTypeBigInt)((input) =>
  typia.assertGuardEquals<TypeTagTypeBigInt>(input),
);
