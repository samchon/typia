import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagLength } from "../../structures/TypeTagLength";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_TypeTagLength =
  _test_assertGuardEquals(TypeGuardError)("TypeTagLength")<TypeTagLength>(
    TypeTagLength,
  )(typia.createAssertGuardEquals<TypeTagLength>());
