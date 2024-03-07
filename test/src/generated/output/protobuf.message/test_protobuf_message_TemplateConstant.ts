import typia from "typia";
import { TemplateConstant } from "../../../structures/TemplateConstant";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
export const test_protobuf_message_TemplateConstant = _test_protobuf_message(
  "TemplateConstant",
)(
  'syntax = "proto3";\n\nmessage TemplateConstant {\n  repeated TemplateConstant.Type value = 1;\n  message Type {\n    required string prefix = 1;\n    required string postfix = 2;\n    required string combined = 3;\n  }\n}',
);
