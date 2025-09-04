import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_assert_TypeTagRangeBigInt = (): void =>
  _test_assert(TypeGuardError)("TypeTagRangeBigInt")<TypeTagRangeBigInt>(
    TypeTagRangeBigInt,
  )((input) => typia.assert<TypeTagRangeBigInt>(input));
