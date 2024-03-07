import typia from "typia";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
export const test_protobuf_message_ObjectPartialAndRequired =
  _test_protobuf_message("ObjectPartialAndRequired")(
    'syntax = "proto3";\n\nmessage ObjectPartialAndRequired {\n  optional string string = 1;\n  optional double number = 2;\n  optional bool boolean = 3;\n  optional ObjectPartialAndRequired object = 4;\n  repeated double array = 5;\n}',
  );
