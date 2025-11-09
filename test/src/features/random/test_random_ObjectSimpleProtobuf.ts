import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_random_ObjectSimpleProtobuf = (): void =>
  _test_random("ObjectSimpleProtobuf")<ObjectSimpleProtobuf>(
    ObjectSimpleProtobuf,
  )({
    random: () =>
      typia.random<ObjectSimpleProtobuf>((ObjectSimpleProtobuf as any).RANDOM),
    assert: typia.createAssert<ObjectSimpleProtobuf>(),
  });
