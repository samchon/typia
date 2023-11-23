import typia from "typia";

import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_protobuf_message_ClassMethod = _test_protobuf_message(
  "ClassMethod",
)(
  'syntax = "proto3";\n\nmessage ClassMethod {\n    message Animal {\n        required string name = 1;\n        required double age = 2;\n    }\n}',
);
