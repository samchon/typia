import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_TypeTagTuple = _test_misc_assertPrune(
  TypeGuardError,
)("TypeTagTuple")<TypeTagTuple>(TypeTagTuple)((input) =>
  typia.misc.assertPrune<TypeTagTuple>(input),
);
