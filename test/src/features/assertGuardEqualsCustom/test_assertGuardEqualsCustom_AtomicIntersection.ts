import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_assertGuardEqualsCustom_AtomicIntersection =
  _test_assertGuardEquals(CustomGuardError)(
    "AtomicIntersection",
  )<AtomicIntersection>(AtomicIntersection)((input) =>
    typia.assertGuardEquals<AtomicIntersection>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
