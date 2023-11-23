import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_random_ArrayRepeatedNullable = _test_random(
  "ArrayRepeatedNullable",
)<ArrayRepeatedNullable>(ArrayRepeatedNullable)({
  random: () =>
    typia.random<ArrayRepeatedNullable>((ArrayRepeatedNullable as any).RANDOM),
  assert: typia.createAssert<ArrayRepeatedNullable>(),
});
