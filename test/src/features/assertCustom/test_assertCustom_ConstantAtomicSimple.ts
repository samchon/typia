import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ConstantAtomicSimple = _test_assert(
  CustomGuardError,
)("ConstantAtomicSimple")<ConstantAtomicSimple>(ConstantAtomicSimple)((input) =>
  typia.assert<ConstantAtomicSimple>(input, (p) => new CustomGuardError(p)),
);
