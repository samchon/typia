import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_createIs_ConstantAtomicAbsorbed = (): void =>
  _test_is("ConstantAtomicAbsorbed")<ConstantAtomicAbsorbed>(
    ConstantAtomicAbsorbed,
  )(typia.createIs<ConstantAtomicAbsorbed>());
