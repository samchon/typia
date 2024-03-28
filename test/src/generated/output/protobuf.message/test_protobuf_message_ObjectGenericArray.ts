import typia from "typia";

import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_protobuf_message_ObjectGenericArray = _test_protobuf_message(
  "ObjectGenericArray",
)(
  'syntax = "proto3";\n\nmessage ObjectGenericArray {\n  required ObjectGenericArray.IPagination pagination = 1;\n  repeated ObjectGenericArray.IPerson data = 2;\n  message IPagination {\n    required double page = 1;\n    required double limit = 2;\n    required double total_count = 3;\n    required double total_pages = 4;\n  }\n\n  message IPerson {\n    required string name = 1;\n    required double age = 2;\n  }\n}',
);
