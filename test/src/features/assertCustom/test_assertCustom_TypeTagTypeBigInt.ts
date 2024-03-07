import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_TypeTagTypeBigInt = _test_assert(
  CustomGuardError,
)("TypeTagTypeBigInt")<TypeTagTypeBigInt>(TypeTagTypeBigInt)((input) =>
  typia.assert<TypeTagTypeBigInt>(input, (p) => new CustomGuardError(p)),
);
