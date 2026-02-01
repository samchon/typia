import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_random_DynamicTag = (): void => _test_random("DynamicTag")<DynamicTag>(
    DynamicTag
)({
  random: () => typia.random<DynamicTag>((DynamicTag as any).RANDOM),
  assert: typia.createAssert<DynamicTag>(),
});
