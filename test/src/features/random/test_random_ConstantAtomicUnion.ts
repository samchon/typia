import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_random_ConstantAtomicUnion = (): void => _test_random("ConstantAtomicUnion")<ConstantAtomicUnion>(
    ConstantAtomicUnion
)({
  random: () => typia.random<ConstantAtomicUnion>((ConstantAtomicUnion as any).RANDOM),
  assert: typia.createAssert<ConstantAtomicUnion>(),
});
