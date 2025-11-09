import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_createAssertGuardEquals_TypeTagCustom = (): void =>
  _test_assertGuardEquals(TypeGuardError)("TypeTagCustom")<TypeTagCustom>(
    TypeTagCustom,
  )(typia.createAssertGuardEquals<TypeTagCustom>());
