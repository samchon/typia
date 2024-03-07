import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_ConstantAtomicTagged =
  _test_misc_assertPrune(TypeGuardError)(
    "ConstantAtomicTagged",
  )<ConstantAtomicTagged>(ConstantAtomicTagged)((input) =>
    typia.misc.assertPrune<ConstantAtomicTagged>(input),
  );
