import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_misc_createPrune_ConstantAtomicWrapper = (): void =>
  _test_misc_prune("ConstantAtomicWrapper")<ConstantAtomicWrapper>(
    ConstantAtomicWrapper,
  )(typia.misc.createPrune<ConstantAtomicWrapper>());
