import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_protobuf_message_TypeTagCustom = _test_protobuf_message(
  "TypeTagCustom",
)(
  'syntax = "proto3";\n\nmessage TypeTagCustom {\n    required string id = 1;\n    required string dollar = 2;\n    required string postfix = 3;\n    required double powerOf = 4;\n}',
);
