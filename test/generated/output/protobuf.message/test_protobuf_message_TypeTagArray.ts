import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TypeTagArray } from "../../../structures/TypeTagArray";

export const test_protobuf_message_TypeTagArray = _test_protobuf_message(
  "TypeTagArray",
)(
  'syntax = "proto3";\n\nmessage TypeTagArray {\n    repeated TypeTagArray.Type value = 1;\n    message Type {\n        repeated string items = 1;\n        repeated double minItems = 2;\n        repeated string both = 3;\n        repeated double equal = 4;\n    }\n}',
);
