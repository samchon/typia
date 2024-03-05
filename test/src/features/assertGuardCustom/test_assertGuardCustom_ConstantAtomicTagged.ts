import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_assertGuardCustom_ConstantAtomicTagged = _test_assertGuard(
  CustomGuardError,
)("ConstantAtomicTagged")<ConstantAtomicTagged>(ConstantAtomicTagged)((input) =>
  typia.assertGuard<ConstantAtomicTagged>(
    input,
    (p) => new CustomGuardError(p),
  ),
);
