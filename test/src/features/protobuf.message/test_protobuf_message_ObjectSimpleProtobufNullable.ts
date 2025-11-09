import typia from "typia";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ObjectSimpleProtobufNullable = (): void => _test_protobuf_message(
  "ObjectSimpleProtobufNullable",
)(typia.protobuf.message<ObjectSimpleProtobufNullable>());