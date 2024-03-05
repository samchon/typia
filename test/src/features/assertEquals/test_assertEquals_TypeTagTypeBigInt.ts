import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_assertEquals_TypeTagTypeBigInt = _test_assertEquals(
  TypeGuardError,
)("TypeTagTypeBigInt")<TypeTagTypeBigInt>(TypeTagTypeBigInt)((input) =>
  typia.assertEquals<TypeTagTypeBigInt>(input),
);
