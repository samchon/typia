import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { AtomicUnion } from "../../structures/AtomicUnion";

import { TypeGuardError } from "typia";

export const test_misc_assertClone_AtomicUnion = _test_misc_assertClone(
  TypeGuardError,
)("AtomicUnion")<AtomicUnion>(AtomicUnion)((input) =>
  typia.misc.assertClone<AtomicUnion>(input),
);
