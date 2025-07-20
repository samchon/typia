import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_misc_validateClone_ConstantAtomicAbsorbed = (): void =>
  _test_misc_validateClone("ConstantAtomicAbsorbed")<ConstantAtomicAbsorbed>(
    ConstantAtomicAbsorbed,
  )((input) => typia.misc.validateClone<ConstantAtomicAbsorbed>(input));
