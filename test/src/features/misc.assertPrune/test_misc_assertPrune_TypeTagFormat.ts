import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_misc_assertPrune_TypeTagFormat = _test_misc_assertPrune(
  TypeGuardError,
)("TypeTagFormat")<TypeTagFormat>(TypeTagFormat)((input) =>
  typia.misc.assertPrune<TypeTagFormat>(input),
);
