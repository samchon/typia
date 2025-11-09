import typia from "typia";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ArraySimpleProtobufOptional = (): void => _test_protobuf_message(
  "ArraySimpleProtobufOptional",
)(typia.protobuf.message<ArraySimpleProtobufOptional>());