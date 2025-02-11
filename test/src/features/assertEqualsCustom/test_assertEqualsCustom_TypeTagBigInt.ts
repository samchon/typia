import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_assertEqualsCustom_TypeTagBigInt = _test_assertEquals(
  CustomGuardError,
)("TypeTagBigInt")<TypeTagBigInt>(TypeTagBigInt)((input) =>
  typia.assertEquals<TypeTagBigInt>(input, (p) => new CustomGuardError(p)),
);
