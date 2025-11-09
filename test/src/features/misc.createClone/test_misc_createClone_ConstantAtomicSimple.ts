import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_misc_createClone_ConstantAtomicSimple = (): void =>
  _test_misc_clone("ConstantAtomicSimple")<ConstantAtomicSimple>(
    ConstantAtomicSimple,
  )(typia.misc.createClone<ConstantAtomicSimple>());
