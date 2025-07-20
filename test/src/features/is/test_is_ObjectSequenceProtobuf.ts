import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_is_ObjectSequenceProtobuf = (): void =>
  _test_is("ObjectSequenceProtobuf")<ObjectSequenceProtobuf>(
    ObjectSequenceProtobuf,
  )((input) => typia.is<ObjectSequenceProtobuf>(input));
