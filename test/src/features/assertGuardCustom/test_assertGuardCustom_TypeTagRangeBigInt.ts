import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_assertGuardCustom_TypeTagRangeBigInt = _test_assertGuard(
  CustomGuardError,
)("TypeTagRangeBigInt")<TypeTagRangeBigInt>(TypeTagRangeBigInt)((input) =>
  typia.assertGuard<TypeTagRangeBigInt>(input, (p) => new CustomGuardError(p)),
);
