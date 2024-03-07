import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_AtomicIntersection = _test_assert(
  CustomGuardError,
)("AtomicIntersection")<AtomicIntersection>(AtomicIntersection)((input) =>
  typia.assert<AtomicIntersection>(input, (p) => new CustomGuardError(p)),
);
