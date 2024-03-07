import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_TypeTagAtomicUnion = _test_misc_assertPrune(
  TypeGuardError,
)("TypeTagAtomicUnion")<TypeTagAtomicUnion>(TypeTagAtomicUnion)((input) =>
  typia.misc.assertPrune<TypeTagAtomicUnion>(input),
);
