import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_TypeTagCustom = _test_misc_assertPrune(
  TypeGuardError,
)("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)(
  typia.misc.createAssertPrune<TypeTagCustom>(),
);
