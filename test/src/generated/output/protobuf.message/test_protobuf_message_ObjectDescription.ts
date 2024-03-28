import typia from "typia";

import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectDescription } from "../../../structures/ObjectDescription";

export const test_protobuf_message_ObjectDescription = _test_protobuf_message(
  "ObjectDescription",
)(
  'syntax = "proto3";\n\nmessage ObjectDescription {\n  required string id = 1;\n  required bool deprecated = 2;\n  required string title = 3;\n  repeated string descriptions = 4;\n  required double newLine = 5;\n}',
);
