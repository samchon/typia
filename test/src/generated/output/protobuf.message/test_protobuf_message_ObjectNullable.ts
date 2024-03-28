import typia from "typia";

import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_protobuf_message_ObjectNullable = _test_protobuf_message(
  "ObjectNullable",
)(
  'syntax = "proto3";\n\nmessage ObjectNullable {\n  repeated ObjectNullable.IProduct value = 1;\n  message IProduct {\n    required string name = 1;\n    required ObjectNullable.IManufacturer manufacturer = 2;\n    optional ObjectNullable.IBrand brand = 3;\n    oneof similar {\n      ObjectNullable.IBrand v4 = 4;\n      ObjectNullable.IManufacturer v5 = 5;\n    }\n  }\n\n  message IManufacturer {\n    required string type = 1;\n    required string name = 2;\n  }\n\n  message IBrand {\n    required string type = 1;\n    required string name = 2;\n  }\n}',
);
