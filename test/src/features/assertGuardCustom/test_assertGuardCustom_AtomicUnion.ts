import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_assertGuardCustom_AtomicUnion = (): void =>
  _test_assertGuard(CustomGuardError)("AtomicUnion")<AtomicUnion>(AtomicUnion)(
    (input) =>
      typia.assertGuard<AtomicUnion>(input, (p) => new CustomGuardError(p)),
  );
