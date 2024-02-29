import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_misc_validateClone_ConstantAtomicTagged =
  _test_misc_validateClone("ConstantAtomicTagged")<ConstantAtomicTagged>(
    ConstantAtomicTagged,
  )((input) => typia.misc.validateClone<ConstantAtomicTagged>(input));
