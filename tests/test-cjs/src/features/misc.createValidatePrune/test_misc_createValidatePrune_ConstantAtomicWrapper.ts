import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_misc_createValidatePrune_ConstantAtomicWrapper = (): void =>
  _test_misc_validatePrune("ConstantAtomicWrapper")<ConstantAtomicWrapper>(
    ConstantAtomicWrapper,
  )(typia.misc.createValidatePrune<ConstantAtomicWrapper>());
