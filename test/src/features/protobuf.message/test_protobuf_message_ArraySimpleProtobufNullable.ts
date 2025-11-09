import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_protobuf_message_ArraySimpleProtobufNullable = (): void =>
  _test_protobuf_message("ArraySimpleProtobufNullable")(
    typia.protobuf.message<ArraySimpleProtobufNullable>(),
  );
