import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_createAssertCustom_ToJsonAtomicUnion = _test_assert(
  CustomGuardError,
)("ToJsonAtomicUnion")<ToJsonAtomicUnion>(ToJsonAtomicUnion)(
  typia.createAssert<ToJsonAtomicUnion>((p) => new CustomGuardError(p)),
);
