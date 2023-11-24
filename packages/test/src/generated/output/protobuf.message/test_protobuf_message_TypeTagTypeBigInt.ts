import typia from "typia";

import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TypeTagTypeBigInt } from "../../../structures/TypeTagTypeBigInt";

export const test_protobuf_message_TypeTagTypeBigInt = _test_protobuf_message(
  "TypeTagTypeBigInt",
)(
  'syntax = "proto3";\n\nmessage TypeTagTypeBigInt {\n    required int64 in64 = 1;\n    required uint64 uint64 = 2;\n}',
);
