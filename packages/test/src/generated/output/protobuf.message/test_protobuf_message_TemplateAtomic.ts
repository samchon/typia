import typia from "typia";

import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_protobuf_message_TemplateAtomic = _test_protobuf_message(
  "TemplateAtomic",
)(
  'syntax = "proto3";\n\nmessage TemplateAtomic {\n    required string prefix = 1;\n    required string postfix = 2;\n    required string middle_string = 3;\n    required string middle_string_empty = 4;\n    required string middle_numeric = 5;\n    required string middle_boolean = 6;\n    required string ipv4 = 7;\n    required string email = 8;\n}',
);
