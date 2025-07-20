import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_createAssertGuardEquals_TypeTagLength = (): void =>
  _test_assertGuardEquals(TypeGuardError)("TypeTagLength")<TypeTagLength>(
    TypeTagLength,
  )(typia.createAssertGuardEquals<TypeTagLength>());
