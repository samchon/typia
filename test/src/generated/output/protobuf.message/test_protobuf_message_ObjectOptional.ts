import typia from "typia";

import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_protobuf_message_ObjectOptional = _test_protobuf_message(
  "ObjectOptional",
)(
  'syntax = "proto3";\n\nmessage ObjectOptional {\n  optional string id = 1;\n  optional string name = 2;\n  optional string email = 3;\n  optional double sequence = 4;\n}',
);
