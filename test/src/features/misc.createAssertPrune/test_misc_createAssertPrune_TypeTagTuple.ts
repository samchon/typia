import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_misc_createAssertPrune_TypeTagTuple = (): void =>
  _test_misc_assertPrune(TypeGuardError)("TypeTagTuple")<TypeTagTuple>(
    TypeTagTuple,
  )(typia.misc.createAssertPrune<TypeTagTuple>());
