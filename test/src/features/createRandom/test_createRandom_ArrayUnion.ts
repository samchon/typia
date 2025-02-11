import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_createRandom_ArrayUnion = _test_random("ArrayUnion")<ArrayUnion>(
    ArrayUnion
)({
  random: typia.createRandom<ArrayUnion>((ArrayUnion as any).RANDOM),
  assert: typia.createAssert<ArrayUnion>(),
});
