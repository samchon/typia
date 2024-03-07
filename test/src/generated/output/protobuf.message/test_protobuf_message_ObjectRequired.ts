import typia from "typia";
import { ObjectRequired } from "../../../structures/ObjectRequired";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
export const test_protobuf_message_ObjectRequired = _test_protobuf_message(
  "ObjectRequired",
)(
  'syntax = "proto3";\n\nmessage Required_lt_ObjectRequired {\n  message IBase_gt_ {\n    required bool boolean = 1;\n    required double number = 2;\n    required string string = 3;\n    repeated double array = 4;\n    optional ObjectRequired.IBase object = 5;\n  }\n}\n\nmessage ObjectRequired {\n  message IBase {\n    optional bool boolean = 1;\n    optional double number = 2;\n    optional string string = 3;\n    repeated double array = 4;\n    optional ObjectRequired.IBase object = 5;\n  }\n}',
);
