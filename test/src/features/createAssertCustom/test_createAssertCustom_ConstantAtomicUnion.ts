import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ConstantAtomicUnion = _test_assert(
  CustomGuardError,
)("ConstantAtomicUnion")<ConstantAtomicUnion>(ConstantAtomicUnion)(
  typia.createAssert<ConstantAtomicUnion>((p) => new CustomGuardError(p)),
);
