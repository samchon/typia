import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_misc_createAssertPrune_TypeTagPattern = (): void =>
  _test_misc_assertPrune(TypeGuardError)("TypeTagPattern")<TypeTagPattern>(
    TypeTagPattern,
  )(typia.misc.createAssertPrune<TypeTagPattern>());
