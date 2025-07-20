import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_assertEqualsCustom_TypeTagRangeBigInt = (): void =>
  _test_assertEquals(CustomGuardError)(
    "TypeTagRangeBigInt",
  )<TypeTagRangeBigInt>(TypeTagRangeBigInt)((input) =>
    typia.assertEquals<TypeTagRangeBigInt>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
