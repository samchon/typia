import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_assertGuardEquals_TypeTagType = (): void =>
  _test_assertGuardEquals(TypeGuardError)("TypeTagType")<TypeTagType>(
    TypeTagType,
  )((input) => typia.assertGuardEquals<TypeTagType>(input));
