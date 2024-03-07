import typia from "typia";
import { ObjectSimpleProtobufNullable } from "../../../structures/ObjectSimpleProtobufNullable";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
export const test_protobuf_message_ObjectSimpleProtobufNullable =
  _test_protobuf_message("ObjectSimpleProtobufNullable")(
    'syntax = "proto3";\n\nmessage ObjectSimpleProtobufNullable {\n  optional bool bool = 1;\n  optional int32 int32 = 2;\n  optional uint32 uint32 = 3;\n  optional int64 int64 = 4;\n  optional uint64 uint64 = 5;\n  optional float float = 6;\n  optional double double = 7;\n  optional string string = 8;\n  optional bytes bytes = 9;\n}',
  );
