import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagRange } from "../../structures/TypeTagRange";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_TypeTagRange = _test_misc_assertPrune(
  TypeGuardError,
)("TypeTagRange")<TypeTagRange>(TypeTagRange)((input) =>
  typia.misc.assertPrune<TypeTagRange>(input),
);
