import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_assertGuardEquals_ConstantAtomicTagged =
  _test_assertGuardEquals("ConstantAtomicTagged")<ConstantAtomicTagged>(
    ConstantAtomicTagged,
  )((input) => typia.assertGuardEquals<ConstantAtomicTagged>(input));
