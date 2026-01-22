import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_misc_createIsClone_ConstantAtomicTagged = (): void =>
  _test_misc_isClone("ConstantAtomicTagged")<ConstantAtomicTagged>(
    ConstantAtomicTagged,
  )(typia.misc.createIsClone<ConstantAtomicTagged>());
