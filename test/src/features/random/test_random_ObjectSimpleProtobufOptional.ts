import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_random_ObjectSimpleProtobufOptional = (): void =>
  _test_random("ObjectSimpleProtobufOptional")<ObjectSimpleProtobufOptional>(
    ObjectSimpleProtobufOptional,
  )({
    random: () =>
      typia.random<ObjectSimpleProtobufOptional>(
        (ObjectSimpleProtobufOptional as any).RANDOM,
      ),
    assert: typia.createAssert<ObjectSimpleProtobufOptional>(),
  });
