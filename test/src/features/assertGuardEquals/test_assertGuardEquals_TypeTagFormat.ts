import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_assertGuardEquals_TypeTagFormat = (): void =>
  _test_assertGuardEquals(TypeGuardError)("TypeTagFormat")<TypeTagFormat>(
    TypeTagFormat,
  )((input) => typia.assertGuardEquals<TypeTagFormat>(input));
