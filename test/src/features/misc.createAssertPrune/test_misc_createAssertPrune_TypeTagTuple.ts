import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_TypeTagTuple = _test_misc_assertPrune(
  TypeGuardError,
)("TypeTagTuple")<TypeTagTuple>(TypeTagTuple)(
  typia.misc.createAssertPrune<TypeTagTuple>(),
);
