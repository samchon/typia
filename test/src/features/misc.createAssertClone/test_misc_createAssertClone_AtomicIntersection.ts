import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_misc_createAssertClone_AtomicIntersection = (): void =>
  _test_misc_assertClone(TypeGuardError)(
    "AtomicIntersection",
  )<AtomicIntersection>(AtomicIntersection)(
    typia.misc.createAssertClone<AtomicIntersection>(),
  );
