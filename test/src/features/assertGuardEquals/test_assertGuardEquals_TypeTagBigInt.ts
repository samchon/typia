import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_assertGuardEquals_TypeTagBigInt = (): void =>
  _test_assertGuardEquals(TypeGuardError)("TypeTagBigInt")<TypeTagBigInt>(
    TypeTagBigInt,
  )((input) => typia.assertGuardEquals<TypeTagBigInt>(input));
