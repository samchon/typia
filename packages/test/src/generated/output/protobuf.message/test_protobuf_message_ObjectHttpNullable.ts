import typia from "typia";

import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectHttpNullable } from "../../../structures/ObjectHttpNullable";

export const test_protobuf_message_ObjectHttpNullable = _test_protobuf_message(
  "ObjectHttpNullable",
)(
  'syntax = "proto3";\n\nmessage ObjectHttpNullable {\n    optional bool boolean = 1;\n    optional int64 bigint = 2;\n    optional double number = 3;\n    optional string string = 4;\n    optional bool constantBoolean = 5;\n    optional uint64 constantBigint = 6;\n    optional int32 constantNumber = 7;\n    optional string constantString = 8;\n    repeated double nullableArray = 9;\n}',
);
