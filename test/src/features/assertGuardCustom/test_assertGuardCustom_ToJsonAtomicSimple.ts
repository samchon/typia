import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_assertGuardCustom_ToJsonAtomicSimple = _test_assertGuard(
  CustomGuardError,
)("ToJsonAtomicSimple")<ToJsonAtomicSimple>(ToJsonAtomicSimple)((input) =>
  typia.assertGuard<ToJsonAtomicSimple>(input, (p) => new CustomGuardError(p)),
);
