import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_createRandom_ConstantAtomicAbsorbed = (): void =>
  _test_random("ConstantAtomicAbsorbed")<ConstantAtomicAbsorbed>(
    ConstantAtomicAbsorbed,
  )({
    random: typia.createRandom<ConstantAtomicAbsorbed>(
      (ConstantAtomicAbsorbed as any).RANDOM,
    ),
    assert: typia.createAssert<ConstantAtomicAbsorbed>(),
  });
