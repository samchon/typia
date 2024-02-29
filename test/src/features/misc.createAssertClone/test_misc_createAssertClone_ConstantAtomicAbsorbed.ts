import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_misc_createAssertClone_ConstantAtomicAbsorbed =
  _test_misc_assertClone("ConstantAtomicAbsorbed")<ConstantAtomicAbsorbed>(
    ConstantAtomicAbsorbed,
  )(typia.misc.createAssertClone<ConstantAtomicAbsorbed>());
