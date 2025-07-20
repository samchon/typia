import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_misc_assertPrune_TypeTagInfinite = (): void =>
  _test_misc_assertPrune(TypeGuardError)("TypeTagInfinite")<TypeTagInfinite>(
    TypeTagInfinite,
  )((input) => typia.misc.assertPrune<TypeTagInfinite>(input));
