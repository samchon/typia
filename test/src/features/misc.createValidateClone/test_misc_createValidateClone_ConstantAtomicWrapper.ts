import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_misc_createValidateClone_ConstantAtomicWrapper = (): void =>
  _test_misc_validateClone("ConstantAtomicWrapper")<ConstantAtomicWrapper>(
    ConstantAtomicWrapper,
  )(typia.misc.createValidateClone<ConstantAtomicWrapper>());
