import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_assertGuardCustom_AtomicSimple = _test_assertGuard(
  CustomGuardError,
)("AtomicSimple")<AtomicSimple>(AtomicSimple)((input) =>
  typia.assertGuard<AtomicSimple>(input, (p) => new CustomGuardError(p)),
);
