import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_misc_assertPrune_TypeTagType = (): void =>
  _test_misc_assertPrune(TypeGuardError)("TypeTagType")<TypeTagType>(
    TypeTagType,
  )((input) => typia.misc.assertPrune<TypeTagType>(input));
