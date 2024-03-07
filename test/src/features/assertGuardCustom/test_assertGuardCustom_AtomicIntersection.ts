import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_AtomicIntersection = _test_assertGuard(
  CustomGuardError,
)("AtomicIntersection")<AtomicIntersection>(AtomicIntersection)((input) =>
  typia.assertGuard<AtomicIntersection>(input, (p) => new CustomGuardError(p)),
);
