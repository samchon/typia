import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_createAssertGuardCustom_TypeTagRangeBigInt = (): void =>
  _test_assertGuard(CustomGuardError)("TypeTagRangeBigInt")<TypeTagRangeBigInt>(
    TypeTagRangeBigInt,
  )(
    typia.createAssertGuard<TypeTagRangeBigInt>((p) => new CustomGuardError(p)),
  );
