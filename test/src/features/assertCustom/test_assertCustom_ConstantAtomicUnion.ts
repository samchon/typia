import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_assertCustom_ConstantAtomicUnion = _test_assert(
  CustomGuardError,
)("ConstantAtomicUnion")<ConstantAtomicUnion>(ConstantAtomicUnion)((input) =>
  typia.assert<ConstantAtomicUnion>(input, (p) => new CustomGuardError(p)),
);
