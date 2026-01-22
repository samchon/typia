import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_misc_createValidateClone_ConstantAtomicTagged = (): void =>
  _test_misc_validateClone("ConstantAtomicTagged")<ConstantAtomicTagged>(
    ConstantAtomicTagged,
  )(typia.misc.createValidateClone<ConstantAtomicTagged>());
