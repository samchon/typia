import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_createRandom_ConstantAtomicUnion = (): void => _test_random("ConstantAtomicUnion")<ConstantAtomicUnion>(
    ConstantAtomicUnion
)({
  random: typia.createRandom<ConstantAtomicUnion>((ConstantAtomicUnion as any).RANDOM),
  assert: typia.createAssert<ConstantAtomicUnion>(),
});
