import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_TypeTagInfinite =
  _test_assertGuardEquals(TypeGuardError)("TypeTagInfinite")<TypeTagInfinite>(
    TypeTagInfinite,
  )(typia.createAssertGuardEquals<TypeTagInfinite>());
