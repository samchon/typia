import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_random_ConstantAtomicWrapper = (): void => _test_random("ConstantAtomicWrapper")<ConstantAtomicWrapper>(
    ConstantAtomicWrapper
)({
  random: () => typia.random<ConstantAtomicWrapper>((ConstantAtomicWrapper as any).RANDOM),
  assert: typia.createAssert<ConstantAtomicWrapper>(),
});
