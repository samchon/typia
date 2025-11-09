import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_misc_createAssertPrune_TypeTagDefault = (): void =>
  _test_misc_assertPrune(TypeGuardError)("TypeTagDefault")<TypeTagDefault>(
    TypeTagDefault,
  )(typia.misc.createAssertPrune<TypeTagDefault>());
