import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_random_ArrayMatrix = _test_random("ArrayMatrix")<ArrayMatrix>(
  ArrayMatrix,
)({
  random: () => typia.random<ArrayMatrix>((ArrayMatrix as any).RANDOM),
  assert: typia.createAssert<ArrayMatrix>(),
});
