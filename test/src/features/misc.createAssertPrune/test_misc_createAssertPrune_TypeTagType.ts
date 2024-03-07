import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagType } from "../../structures/TypeTagType";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_TypeTagType = _test_misc_assertPrune(
  TypeGuardError,
)("TypeTagType")<TypeTagType>(TypeTagType)(
  typia.misc.createAssertPrune<TypeTagType>(),
);
