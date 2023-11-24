import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_misc_assertClone_ConstantAtomicWrapper =
  _test_misc_assertClone("ConstantAtomicWrapper")<ConstantAtomicWrapper>(
    ConstantAtomicWrapper,
  )((input) => typia.misc.assertClone<ConstantAtomicWrapper>(input));
