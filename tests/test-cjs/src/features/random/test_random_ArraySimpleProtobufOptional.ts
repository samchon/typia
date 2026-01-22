import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_random_ArraySimpleProtobufOptional = (): void =>
  _test_random("ArraySimpleProtobufOptional")<ArraySimpleProtobufOptional>(
    ArraySimpleProtobufOptional,
  )({
    random: () =>
      typia.random<ArraySimpleProtobufOptional>(
        (ArraySimpleProtobufOptional as any).RANDOM,
      ),
    assert: typia.createAssert<ArraySimpleProtobufOptional>(),
  });
