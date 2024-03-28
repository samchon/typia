import typia from "typia";

import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectSimpleProtobufOptional } from "../../../structures/ObjectSimpleProtobufOptional";

export const test_protobuf_message_ObjectSimpleProtobufOptional =
  _test_protobuf_message("ObjectSimpleProtobufOptional")(
    'syntax = "proto3";\n\nmessage ObjectSimpleProtobufOptional {\n  optional bool bool = 1;\n  optional int32 int32 = 2;\n  optional uint32 uint32 = 3;\n  optional int64 int64 = 4;\n  optional uint64 uint64 = 5;\n  optional float float = 6;\n  optional double double = 7;\n  optional string string = 8;\n  optional bytes bytes = 9;\n}',
  );
