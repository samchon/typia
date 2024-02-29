import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_assertGuard_ConstantAtomicTagged = _test_assertGuard(
  "ConstantAtomicTagged",
)<ConstantAtomicTagged>(ConstantAtomicTagged)((input) =>
  typia.assertGuard<ConstantAtomicTagged>(input),
);
