import typia from "typia";

import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";

export const test_protobuf_message_TypeTagFormat = _test_protobuf_message(
  "TypeTagFormat",
)(
  'syntax = "proto3";\n\nmessage TypeTagFormat {\n    required string byte = 1;\n    required string password = 2;\n    required string regex = 3;\n    required string uuid = 4;\n    required string email = 5;\n    required string hostname = 6;\n    required string ipv4 = 7;\n    required string ipv6 = 8;\n    required string uri = 9;\n    required string uriReference = 10;\n    required string uriTemplate = 11;\n    required string url = 12;\n    required string datetime = 13;\n    required string date = 14;\n    required string time = 15;\n    required string duration = 16;\n    required string jsonPointer = 17;\n    required string relativeJsonPointer = 18;\n}',
);
