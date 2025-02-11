import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_createAssertGuardEquals_TypeTagArray =
  _test_assertGuardEquals(TypeGuardError)("TypeTagArray")<TypeTagArray>(
    TypeTagArray,
  )(typia.createAssertGuardEquals<TypeTagArray>());
