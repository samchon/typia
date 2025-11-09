import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_misc_validatePrune_ConstantAtomicAbsorbed = (): void =>
  _test_misc_validatePrune("ConstantAtomicAbsorbed")<ConstantAtomicAbsorbed>(
    ConstantAtomicAbsorbed,
  )((input) => typia.misc.validatePrune<ConstantAtomicAbsorbed>(input));
