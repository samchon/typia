import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_protobuf_message_TemplateConstant = _test_protobuf_message(
  "TemplateConstant",
)(
  'syntax = "proto3";\n\nmessage TemplateConstant {\n    repeated TemplateConstant.Type value = 1;\n    message Type {\n        required string prefix = 1;\n        required string postfix = 2;\n        required string combined = 3;\n    }\n}',
);
