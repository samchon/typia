import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_createAssertCustom_AtomicIntersection = _test_assert(
  CustomGuardError,
)("AtomicIntersection")<AtomicIntersection>(AtomicIntersection)(
  typia.createAssert<AtomicIntersection>((p) => new CustomGuardError(p)),
);
