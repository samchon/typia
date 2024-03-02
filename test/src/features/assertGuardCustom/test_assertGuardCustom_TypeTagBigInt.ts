import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_assertGuardCustom_TypeTagBigInt = _test_assertGuard(
  CustomGuardError,
)("TypeTagBigInt")<TypeTagBigInt>(TypeTagBigInt)((input) =>
  typia.assertGuard<TypeTagBigInt>(input, (p) => new CustomGuardError(p)),
);
