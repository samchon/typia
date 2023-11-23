import typia from "typia";

import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_protobuf_message_ObjectIntersection = _test_protobuf_message(
  "ObjectIntersection",
)(
  'syntax = "proto3";\n\nmessage ObjectIntersection {\n    required string email = 1;\n    required string name = 2;\n    required bool vulnerable = 3;\n}',
);
