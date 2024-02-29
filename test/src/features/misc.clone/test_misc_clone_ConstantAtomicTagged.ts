import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_misc_clone_ConstantAtomicTagged = _test_misc_clone(
  "ConstantAtomicTagged",
)<ConstantAtomicTagged>(ConstantAtomicTagged)((input) =>
  typia.misc.clone<ConstantAtomicTagged>(input),
);
