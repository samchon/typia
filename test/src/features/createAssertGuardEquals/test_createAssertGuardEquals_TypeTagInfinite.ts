import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_createAssertGuardEquals_TypeTagInfinite = (): void =>
  _test_assertGuardEquals(TypeGuardError)("TypeTagInfinite")<TypeTagInfinite>(
    TypeTagInfinite,
  )(typia.createAssertGuardEquals<TypeTagInfinite>());
