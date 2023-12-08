import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_random_ObjectSimpleProtobufNullable = _test_random(
  "ObjectSimpleProtobufNullable",
)<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)({
  random: () =>
    typia.random<ObjectSimpleProtobufNullable>(
      (ObjectSimpleProtobufNullable as any).RANDOM,
    ),
  assert: typia.createAssert<ObjectSimpleProtobufNullable>(),
});
