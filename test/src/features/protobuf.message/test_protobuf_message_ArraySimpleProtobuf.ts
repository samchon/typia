import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_protobuf_message_ArraySimpleProtobuf = (): void =>
  _test_protobuf_message("ArraySimpleProtobuf")(
    typia.protobuf.message<ArraySimpleProtobuf>(),
  );
