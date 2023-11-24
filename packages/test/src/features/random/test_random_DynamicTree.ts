import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_random_DynamicTree = _test_random("DynamicTree")<DynamicTree>(
  DynamicTree,
)({
  random: () => typia.random<DynamicTree>((DynamicTree as any).RANDOM),
  assert: typia.createAssert<DynamicTree>(),
});
