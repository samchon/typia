import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ToJsonAtomicUnion = _test_assert(
  CustomGuardError,
)("ToJsonAtomicUnion")<ToJsonAtomicUnion>(ToJsonAtomicUnion)(
  typia.createAssert<ToJsonAtomicUnion>((p) => new CustomGuardError(p)),
);
