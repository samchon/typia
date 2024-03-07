import typia from "typia";
import { ObjectInternal } from "../../../structures/ObjectInternal";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
export const test_protobuf_message_ObjectInternal = _test_protobuf_message(
  "ObjectInternal",
)(
  'syntax = "proto3";\n\nmessage ObjectInternal {\n  required string id = 1;\n  required string name = 2;\n}',
);
