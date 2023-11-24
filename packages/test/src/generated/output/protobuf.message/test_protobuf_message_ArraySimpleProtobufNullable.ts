import typia from "typia";

import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ArraySimpleProtobufNullable } from "../../../structures/ArraySimpleProtobufNullable";

export const test_protobuf_message_ArraySimpleProtobufNullable =
  _test_protobuf_message("ArraySimpleProtobufNullable")(
    'syntax = "proto3";\n\nmessage ArraySimpleProtobufNullable {\n    repeated bool boolean = 1;\n    repeated int32 int32 = 2;\n    repeated uint32 uint32 = 3;\n    repeated int64 int64 = 4;\n    repeated uint64 uint64 = 5;\n    repeated float float = 6;\n    repeated double double = 7;\n    repeated string string = 8;\n    repeated bytes bytes = 9;\n    repeated ArraySimpleProtobufNullable object = 10;\n}',
  );
