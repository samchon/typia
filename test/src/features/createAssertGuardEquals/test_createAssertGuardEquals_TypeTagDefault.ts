import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_createAssertGuardEquals_TypeTagDefault =
  _test_assertGuardEquals(TypeGuardError)("TypeTagDefault")<TypeTagDefault>(
    TypeTagDefault,
  )(typia.createAssertGuardEquals<TypeTagDefault>());
