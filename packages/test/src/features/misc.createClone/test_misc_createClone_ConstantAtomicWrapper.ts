import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_misc_createClone_ConstantAtomicWrapper = _test_misc_clone(
  "ConstantAtomicWrapper",
)<ConstantAtomicWrapper>(ConstantAtomicWrapper)(
  typia.misc.createClone<ConstantAtomicWrapper>(),
);
