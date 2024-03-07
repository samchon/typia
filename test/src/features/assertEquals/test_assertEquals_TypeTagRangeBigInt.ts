import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

import { TypeGuardError } from "typia";

export const test_assertEquals_TypeTagRangeBigInt = _test_assertEquals(
  TypeGuardError,
)("TypeTagRangeBigInt")<TypeTagRangeBigInt>(TypeTagRangeBigInt)((input) =>
  typia.assertEquals<TypeTagRangeBigInt>(input),
);
