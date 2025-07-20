import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_assertEqualsCustom_AtomicIntersection = (): void =>
  _test_assertEquals(CustomGuardError)(
    "AtomicIntersection",
  )<AtomicIntersection>(AtomicIntersection)((input) =>
    typia.assertEquals<AtomicIntersection>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
