import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_createAssertGuardEqualsCustom_AtomicIntersection =
  _test_assertGuardEquals(CustomGuardError)(
    "AtomicIntersection",
  )<AtomicIntersection>(AtomicIntersection)(
    typia.createAssertGuardEquals<AtomicIntersection>(
      (p) => new CustomGuardError(p),
    ),
  );
