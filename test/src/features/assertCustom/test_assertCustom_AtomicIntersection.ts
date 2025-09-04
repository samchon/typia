import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_assertCustom_AtomicIntersection = (): void =>
  _test_assert(CustomGuardError)("AtomicIntersection")<AtomicIntersection>(
    AtomicIntersection,
  )((input) =>
    typia.assert<AtomicIntersection>(input, (p) => new CustomGuardError(p)),
  );
