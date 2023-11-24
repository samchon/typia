import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_misc_createIsClone_ConstantAtomicWrapper = _test_misc_isClone(
  "ConstantAtomicWrapper",
)<ConstantAtomicWrapper>(ConstantAtomicWrapper)(
  typia.misc.createIsClone<ConstantAtomicWrapper>(),
);
