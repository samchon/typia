import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_misc_createAssertPrune_ArraySimple = (): void =>
  _test_misc_assertPrune(TypeGuardError)("ArraySimple")<ArraySimple>(
    ArraySimple,
  )(typia.misc.createAssertPrune<ArraySimple>());
