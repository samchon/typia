import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_createAssertGuardCustom_AtomicIntersection =
  _test_assertGuard(CustomGuardError)("AtomicIntersection")<AtomicIntersection>(
    AtomicIntersection,
  )(
    typia.createAssertGuard<AtomicIntersection>((p) => new CustomGuardError(p)),
  );
