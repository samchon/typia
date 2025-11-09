import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_random_ConstantAtomicSimple = (): void => _test_random("ConstantAtomicSimple")<ConstantAtomicSimple>(
    ConstantAtomicSimple
)({
  random: () => typia.random<ConstantAtomicSimple>((ConstantAtomicSimple as any).RANDOM),
  assert: typia.createAssert<ConstantAtomicSimple>(),
});
