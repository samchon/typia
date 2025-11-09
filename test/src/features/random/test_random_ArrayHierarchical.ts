import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_random_ArrayHierarchical = (): void => _test_random("ArrayHierarchical")<ArrayHierarchical>(
    ArrayHierarchical
)({
  random: () => typia.random<ArrayHierarchical>((ArrayHierarchical as any).RANDOM),
  assert: typia.createAssert<ArrayHierarchical>(),
});
