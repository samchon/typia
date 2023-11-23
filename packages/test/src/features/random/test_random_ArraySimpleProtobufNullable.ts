import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_random_ArraySimpleProtobufNullable = _test_random(
  "ArraySimpleProtobufNullable",
)<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)({
  random: () =>
    typia.random<ArraySimpleProtobufNullable>(
      (ArraySimpleProtobufNullable as any).RANDOM,
    ),
  assert: typia.createAssert<ArraySimpleProtobufNullable>(),
});
