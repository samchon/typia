import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_createAssertGuardEqualsCustom_TypeTagRangeBigInt = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "TypeTagRangeBigInt",
  )<TypeTagRangeBigInt>(TypeTagRangeBigInt)(
    typia.createAssertGuardEquals<TypeTagRangeBigInt>(
      (p) => new CustomGuardError(p),
    ),
  );
