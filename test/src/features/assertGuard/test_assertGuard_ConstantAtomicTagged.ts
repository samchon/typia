import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_assertGuard_ConstantAtomicTagged = (): void =>
  _test_assertGuard(TypeGuardError)(
    "ConstantAtomicTagged",
  )<ConstantAtomicTagged>(ConstantAtomicTagged)((input) =>
    typia.assertGuard<ConstantAtomicTagged>(input),
  );
