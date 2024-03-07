import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

import { TypeGuardError } from "typia";

export const test_assertGuard_TypeTagTypeBigInt = _test_assertGuard(
  TypeGuardError,
)("TypeTagTypeBigInt")<TypeTagTypeBigInt>(TypeTagTypeBigInt)((input) =>
  typia.assertGuard<TypeTagTypeBigInt>(input),
);
