import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_AtomicIntersection =
  _test_assertGuardEquals(TypeGuardError)(
    "AtomicIntersection",
  )<AtomicIntersection>(AtomicIntersection)(
    typia.createAssertGuardEquals<AtomicIntersection>(),
  );
