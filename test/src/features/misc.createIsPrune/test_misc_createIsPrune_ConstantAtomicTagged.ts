import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_misc_createIsPrune_ConstantAtomicTagged = (): void =>
  _test_misc_isPrune("ConstantAtomicTagged")<ConstantAtomicTagged>(
    ConstantAtomicTagged,
  )(typia.misc.createIsPrune<ConstantAtomicTagged>());
