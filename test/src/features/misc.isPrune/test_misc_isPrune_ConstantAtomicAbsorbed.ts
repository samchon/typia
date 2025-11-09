import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_misc_isPrune_ConstantAtomicAbsorbed = (): void =>
  _test_misc_isPrune("ConstantAtomicAbsorbed")<ConstantAtomicAbsorbed>(
    ConstantAtomicAbsorbed,
  )((input) => typia.misc.isPrune<ConstantAtomicAbsorbed>(input));
