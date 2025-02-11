import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_assertGuardEqualsCustom_TypeTagRangeBigInt =
  _test_assertGuardEquals(CustomGuardError)(
    "TypeTagRangeBigInt",
  )<TypeTagRangeBigInt>(TypeTagRangeBigInt)((input) =>
    typia.assertGuardEquals<TypeTagRangeBigInt>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
