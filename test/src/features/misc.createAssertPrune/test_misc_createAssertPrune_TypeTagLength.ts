import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagLength } from "../../structures/TypeTagLength";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_TypeTagLength = _test_misc_assertPrune(
  TypeGuardError,
)("TypeTagLength")<TypeTagLength>(TypeTagLength)(
  typia.misc.createAssertPrune<TypeTagLength>(),
);
