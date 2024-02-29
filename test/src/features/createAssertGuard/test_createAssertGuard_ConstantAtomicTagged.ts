import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_createAssertGuard_ConstantAtomicTagged = _test_assertGuard(
  "ConstantAtomicTagged",
)<ConstantAtomicTagged>(ConstantAtomicTagged)(
  typia.createAssertGuard<ConstantAtomicTagged>(),
);
