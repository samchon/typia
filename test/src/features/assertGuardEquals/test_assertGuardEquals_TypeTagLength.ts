import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_assertGuardEquals_TypeTagLength = (): void =>
  _test_assertGuardEquals(TypeGuardError)("TypeTagLength")<TypeTagLength>(
    TypeTagLength,
  )((input) => typia.assertGuardEquals<TypeTagLength>(input));
