import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_createAssertGuardEquals_TypeTagPattern =
  _test_assertGuardEquals(TypeGuardError)("TypeTagPattern")<TypeTagPattern>(
    TypeTagPattern,
  )(typia.createAssertGuardEquals<TypeTagPattern>());
