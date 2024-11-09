import typia from "typia";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ObjectSequenceProtobuf = _test_protobuf_message(
  "ObjectSequenceProtobuf",
)(typia.protobuf.message<ObjectSequenceProtobuf>());