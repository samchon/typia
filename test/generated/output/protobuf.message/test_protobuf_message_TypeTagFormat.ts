import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";

export const test_protobuf_message_TypeTagFormat = _test_protobuf_message(
  "TypeTagFormat",
)(
  'syntax = "proto3";\n\nmessage TypeTagFormat {\n    required string uuid = 1;\n    required string email = 2;\n    required string url = 3;\n    required string ipv4 = 4;\n    required string ipv6 = 5;\n    required string date = 6;\n    required string date_time = 7;\n}',
);
