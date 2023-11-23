import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_misc_createAssertPrune_ConstantAtomicWrapper =
  _test_misc_assertPrune("ConstantAtomicWrapper")<ConstantAtomicWrapper>(
    ConstantAtomicWrapper,
  )(typia.misc.createAssertPrune<ConstantAtomicWrapper>());
