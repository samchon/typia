import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ToJsonAtomicUnion = _test_assertGuard(
  CustomGuardError,
)("ToJsonAtomicUnion")<ToJsonAtomicUnion>(ToJsonAtomicUnion)((input) =>
  typia.assertGuard<ToJsonAtomicUnion>(input, (p) => new CustomGuardError(p)),
);
