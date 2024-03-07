import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_TypeTagRangeBigInt = _test_assert(
  CustomGuardError,
)("TypeTagRangeBigInt")<TypeTagRangeBigInt>(TypeTagRangeBigInt)((input) =>
  typia.assert<TypeTagRangeBigInt>(input, (p) => new CustomGuardError(p)),
);
