import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_misc_assertClone_AtomicUnion = (): void =>
  _test_misc_assertClone(TypeGuardError)("AtomicUnion")<AtomicUnion>(
    AtomicUnion,
  )((input) => typia.misc.assertClone<AtomicUnion>(input));
