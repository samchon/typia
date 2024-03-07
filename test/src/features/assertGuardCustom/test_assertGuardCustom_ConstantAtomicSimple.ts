import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ConstantAtomicSimple = _test_assertGuard(
  CustomGuardError,
)("ConstantAtomicSimple")<ConstantAtomicSimple>(ConstantAtomicSimple)((input) =>
  typia.assertGuard<ConstantAtomicSimple>(
    input,
    (p) => new CustomGuardError(p),
  ),
);
