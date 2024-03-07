import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_AtomicIntersection = _test_assertEquals(
  CustomGuardError,
)("AtomicIntersection")<AtomicIntersection>(AtomicIntersection)((input) =>
  typia.assertEquals<AtomicIntersection>(input, (p) => new CustomGuardError(p)),
);
