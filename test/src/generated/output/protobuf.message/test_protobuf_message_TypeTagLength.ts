import typia from "typia";

import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TypeTagLength } from "../../../structures/TypeTagLength";

export const test_protobuf_message_TypeTagLength = _test_protobuf_message(
  "TypeTagLength",
)(
  'syntax = "proto3";\n\nmessage TypeTagLength {\n  repeated TypeTagLength.Type value = 1;\n  message Type {\n    required string fixed = 1;\n    required string minimum = 2;\n    required string maximum = 3;\n    required string minimum_and_maximum = 4;\n    required string equal = 5;\n  }\n}',
);
