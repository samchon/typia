import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_createRandom_ObjectSequenceProtobuf = (): void =>
  _test_random("ObjectSequenceProtobuf")<ObjectSequenceProtobuf>(
    ObjectSequenceProtobuf,
  )({
    random: typia.createRandom<ObjectSequenceProtobuf>(
      (ObjectSequenceProtobuf as any).RANDOM,
    ),
    assert: typia.createAssert<ObjectSequenceProtobuf>(),
  });
