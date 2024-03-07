import typia from "typia";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ArraySimpleProtobuf = _test_protobuf_message(
  "ArraySimpleProtobuf",
)(typia.protobuf.message<ArraySimpleProtobuf>());
