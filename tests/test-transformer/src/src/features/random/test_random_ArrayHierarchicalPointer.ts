import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_random_ArrayHierarchicalPointer = (): void => _test_random("ArrayHierarchicalPointer")<ArrayHierarchicalPointer>(
    ArrayHierarchicalPointer
)({
  random: () => typia.random<ArrayHierarchicalPointer>((ArrayHierarchicalPointer as any).RANDOM),
  assert: typia.createAssert<ArrayHierarchicalPointer>(),
});
