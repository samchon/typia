import typia from "typia";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
export const test_protobuf_message_ObjectIntersection = _test_protobuf_message(
  "ObjectIntersection",
)(
  'syntax = "proto3";\n\nmessage ObjectIntersection {\n  required string email = 1;\n  required string name = 2;\n  required bool vulnerable = 3;\n}',
);
