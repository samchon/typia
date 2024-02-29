import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_createAssertGuardEquals_ConstantAtomicTagged =
  _test_assertGuardEquals("ConstantAtomicTagged")<ConstantAtomicTagged>(
    ConstantAtomicTagged,
  )(typia.createAssertGuardEquals<ConstantAtomicTagged>());
