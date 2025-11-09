import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_assertGuardEquals_TypeTagRange = (): void =>
  _test_assertGuardEquals(TypeGuardError)("TypeTagRange")<TypeTagRange>(
    TypeTagRange,
  )((input) => typia.assertGuardEquals<TypeTagRange>(input));
