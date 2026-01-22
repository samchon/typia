import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_assertGuardCustom_AtomicIntersection = (): void =>
  _test_assertGuard(CustomGuardError)("AtomicIntersection")<AtomicIntersection>(
    AtomicIntersection,
  )((input) =>
    typia.assertGuard<AtomicIntersection>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
