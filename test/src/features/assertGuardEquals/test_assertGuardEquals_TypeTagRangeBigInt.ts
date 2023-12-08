import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_assertGuardEquals_TypeTagRangeBigInt =
  _test_assertGuardEquals("TypeTagRangeBigInt")<TypeTagRangeBigInt>(
    TypeTagRangeBigInt,
  )((input) => typia.assertGuardEquals<TypeTagRangeBigInt>(input));
