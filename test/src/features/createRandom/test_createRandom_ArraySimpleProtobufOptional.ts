import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_createRandom_ArraySimpleProtobufOptional = _test_random(
  "ArraySimpleProtobufOptional",
)<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)({
  random: typia.createRandom<ArraySimpleProtobufOptional>(
    (ArraySimpleProtobufOptional as any).RANDOM,
  ),
  assert: typia.createAssert<ArraySimpleProtobufOptional>(),
});
