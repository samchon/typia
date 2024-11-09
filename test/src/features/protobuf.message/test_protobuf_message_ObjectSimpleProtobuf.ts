import typia from "typia";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ObjectSimpleProtobuf = _test_protobuf_message(
  "ObjectSimpleProtobuf",
)(typia.protobuf.message<ObjectSimpleProtobuf>());