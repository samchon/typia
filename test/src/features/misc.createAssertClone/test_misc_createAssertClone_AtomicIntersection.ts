import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_AtomicIntersection =
  _test_misc_assertClone(TypeGuardError)(
    "AtomicIntersection",
  )<AtomicIntersection>(AtomicIntersection)(
    typia.misc.createAssertClone<AtomicIntersection>(),
  );
