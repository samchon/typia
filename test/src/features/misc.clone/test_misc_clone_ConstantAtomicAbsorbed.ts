import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_misc_clone_ConstantAtomicAbsorbed = _test_misc_clone(
  "ConstantAtomicAbsorbed",
)<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)((input) =>
  typia.misc.clone<ConstantAtomicAbsorbed>(input),
);
