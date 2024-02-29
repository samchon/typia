import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_misc_createClone_ConstantAtomicTagged = _test_misc_clone(
  "ConstantAtomicTagged",
)<ConstantAtomicTagged>(ConstantAtomicTagged)(
  typia.misc.createClone<ConstantAtomicTagged>(),
);
