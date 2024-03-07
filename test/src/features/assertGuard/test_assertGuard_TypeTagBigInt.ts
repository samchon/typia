import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

import { TypeGuardError } from "typia";

export const test_assertGuard_TypeTagBigInt = _test_assertGuard(TypeGuardError)(
  "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)((input) =>
  typia.assertGuard<TypeTagBigInt>(input),
);
