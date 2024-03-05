import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_misc_assertClone_TypeTagAtomicUnion = _test_misc_assertClone(
  TypeGuardError,
)("TypeTagAtomicUnion")<TypeTagAtomicUnion>(TypeTagAtomicUnion)((input) =>
  typia.misc.assertClone<TypeTagAtomicUnion>(input),
);
