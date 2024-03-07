import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_TypeTagBigInt = _test_assertGuard(
  CustomGuardError,
)("TypeTagBigInt")<TypeTagBigInt>(TypeTagBigInt)(
  typia.createAssertGuard<TypeTagBigInt>((p) => new CustomGuardError(p)),
);
