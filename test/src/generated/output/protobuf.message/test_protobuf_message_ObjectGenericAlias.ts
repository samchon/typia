import typia from "typia";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
export const test_protobuf_message_ObjectGenericAlias = _test_protobuf_message(
  "ObjectGenericAlias",
)(
  'syntax = "proto3";\n\nmessage ObjectGenericAlias {\n  message Alias {\n    required string value = 1;\n  }\n}',
);
