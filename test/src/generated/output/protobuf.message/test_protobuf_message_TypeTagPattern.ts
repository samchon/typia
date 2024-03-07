import typia from "typia";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
export const test_protobuf_message_TypeTagPattern = _test_protobuf_message(
  "TypeTagPattern",
)(
  'syntax = "proto3";\n\nmessage TypeTagPattern {\n  required string uuid = 1;\n  required string email = 2;\n  required string ipv4 = 3;\n  required string ipv6 = 4;\n}',
);
