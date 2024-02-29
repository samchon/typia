import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_misc_validatePrune_ConstantAtomicTagged =
  _test_misc_validatePrune("ConstantAtomicTagged")<ConstantAtomicTagged>(
    ConstantAtomicTagged,
  )((input) => typia.misc.validatePrune<ConstantAtomicTagged>(input));
