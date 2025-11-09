import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_createAssertGuardCustom_TypeTagBigInt = (): void =>
  _test_assertGuard(CustomGuardError)("TypeTagBigInt")<TypeTagBigInt>(
    TypeTagBigInt,
  )(typia.createAssertGuard<TypeTagBigInt>((p) => new CustomGuardError(p)));
