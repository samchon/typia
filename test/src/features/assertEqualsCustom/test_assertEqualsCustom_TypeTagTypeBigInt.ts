import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_assertEqualsCustom_TypeTagTypeBigInt = _test_assertEquals(
  CustomGuardError,
)("TypeTagTypeBigInt")<TypeTagTypeBigInt>(TypeTagTypeBigInt)((input) =>
  typia.assertEquals<TypeTagTypeBigInt>(input, (p) => new CustomGuardError(p)),
);
