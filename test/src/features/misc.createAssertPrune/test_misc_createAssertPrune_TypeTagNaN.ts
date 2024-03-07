import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_TypeTagNaN = _test_misc_assertPrune(
  TypeGuardError,
)("TypeTagNaN")<TypeTagNaN>(TypeTagNaN)(
  typia.misc.createAssertPrune<TypeTagNaN>(),
);
