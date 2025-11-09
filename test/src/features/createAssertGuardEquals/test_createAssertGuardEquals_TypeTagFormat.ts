import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_createAssertGuardEquals_TypeTagFormat = (): void =>
  _test_assertGuardEquals(TypeGuardError)("TypeTagFormat")<TypeTagFormat>(
    TypeTagFormat,
  )(typia.createAssertGuardEquals<TypeTagFormat>());
