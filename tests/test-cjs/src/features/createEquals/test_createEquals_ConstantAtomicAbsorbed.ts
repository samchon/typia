import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_createEquals_ConstantAtomicAbsorbed = (): void =>
  _test_equals("ConstantAtomicAbsorbed")<ConstantAtomicAbsorbed>(
    ConstantAtomicAbsorbed,
  )(typia.createEquals<ConstantAtomicAbsorbed>());
