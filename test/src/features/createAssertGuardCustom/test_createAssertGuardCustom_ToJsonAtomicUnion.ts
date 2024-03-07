import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ToJsonAtomicUnion = _test_assertGuard(
  CustomGuardError,
)("ToJsonAtomicUnion")<ToJsonAtomicUnion>(ToJsonAtomicUnion)(
  typia.createAssertGuard<ToJsonAtomicUnion>((p) => new CustomGuardError(p)),
);
