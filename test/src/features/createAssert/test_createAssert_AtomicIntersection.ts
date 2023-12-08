import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_createAssert_AtomicIntersection = _test_assert(
  "AtomicIntersection",
)<AtomicIntersection>(AtomicIntersection)(
  typia.createAssert<AtomicIntersection>(),
);
