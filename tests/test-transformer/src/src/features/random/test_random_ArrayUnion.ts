import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_random_ArrayUnion = (): void => _test_random("ArrayUnion")<ArrayUnion>(
    ArrayUnion
)({
  random: () => typia.random<ArrayUnion>((ArrayUnion as any).RANDOM),
  assert: typia.createAssert<ArrayUnion>(),
});
