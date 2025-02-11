import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_assertEquals_TypeTagRangeBigInt = _test_assertEquals(
  TypeGuardError,
)("TypeTagRangeBigInt")<TypeTagRangeBigInt>(TypeTagRangeBigInt)((input) =>
  typia.assertEquals<TypeTagRangeBigInt>(input),
);
