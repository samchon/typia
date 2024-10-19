import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_createIs_ObjectSequenceProtobuf = _test_is(
  "ObjectSequenceProtobuf",
)<ObjectSequenceProtobuf>(ObjectSequenceProtobuf)(
  typia.createIs<ObjectSequenceProtobuf>(),
);
