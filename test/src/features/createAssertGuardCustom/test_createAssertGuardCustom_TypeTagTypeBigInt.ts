import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_createAssertGuardCustom_TypeTagTypeBigInt = _test_assertGuard(
  CustomGuardError,
)("TypeTagTypeBigInt")<TypeTagTypeBigInt>(TypeTagTypeBigInt)(
  typia.createAssertGuard<TypeTagTypeBigInt>((p) => new CustomGuardError(p)),
);
