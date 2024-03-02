import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_createAssertGuardEquals_TypeTagBigInt =
  _test_assertGuardEquals(TypeGuardError)("TypeTagBigInt")<TypeTagBigInt>(
    TypeTagBigInt,
  )(typia.createAssertGuardEquals<TypeTagBigInt>());
