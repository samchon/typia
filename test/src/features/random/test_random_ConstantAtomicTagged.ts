import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_random_ConstantAtomicTagged = (): void =>
  _test_random("ConstantAtomicTagged")<ConstantAtomicTagged>(
    ConstantAtomicTagged,
  )({
    random: () =>
      typia.random<ConstantAtomicTagged>((ConstantAtomicTagged as any).RANDOM),
    assert: typia.createAssert<ConstantAtomicTagged>(),
  });
