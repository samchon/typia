import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_createRandom_ArrayRepeatedRequired = _test_random(
  "ArrayRepeatedRequired",
)<ArrayRepeatedRequired>(ArrayRepeatedRequired)({
  random: typia.createRandom<ArrayRepeatedRequired>(
    (ArrayRepeatedRequired as any).RANDOM,
  ),
  assert: typia.createAssert<ArrayRepeatedRequired>(),
});
