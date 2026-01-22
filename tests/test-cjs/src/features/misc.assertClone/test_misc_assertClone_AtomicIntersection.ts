import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_misc_assertClone_AtomicIntersection = (): void =>
  _test_misc_assertClone(TypeGuardError)(
    "AtomicIntersection",
  )<AtomicIntersection>(AtomicIntersection)((input) =>
    typia.misc.assertClone<AtomicIntersection>(input),
  );
