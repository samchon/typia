import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_createAssert_AtomicIntersection = _test_assert(
  TypeGuardError,
)("AtomicIntersection")<AtomicIntersection>(AtomicIntersection)(
  typia.createAssert<AtomicIntersection>(),
);
