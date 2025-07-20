import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_misc_assertPrune_TypeTagCustom = (): void =>
  _test_misc_assertPrune(TypeGuardError)("TypeTagCustom")<TypeTagCustom>(
    TypeTagCustom,
  )((input) => typia.misc.assertPrune<TypeTagCustom>(input));
