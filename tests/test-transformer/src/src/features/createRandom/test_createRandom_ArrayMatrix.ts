import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_createRandom_ArrayMatrix = (): void => _test_random("ArrayMatrix")<ArrayMatrix>(
    ArrayMatrix
)({
  random: typia.createRandom<ArrayMatrix>((ArrayMatrix as any).RANDOM),
  assert: typia.createAssert<ArrayMatrix>(),
});
