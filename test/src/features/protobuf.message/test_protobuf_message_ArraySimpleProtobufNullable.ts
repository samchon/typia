import typia from "typia";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ArraySimpleProtobufNullable = (): void => _test_protobuf_message(
  "ArraySimpleProtobufNullable",
)(typia.protobuf.message<ArraySimpleProtobufNullable>());