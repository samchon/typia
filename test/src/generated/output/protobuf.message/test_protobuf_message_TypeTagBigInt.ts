import typia from "typia";
import { TypeTagBigInt } from "../../../structures/TypeTagBigInt";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
export const test_protobuf_message_TypeTagBigInt = _test_protobuf_message(
  "TypeTagBigInt",
)(
  'syntax = "proto3";\n\nmessage TypeTagBigInt {\n  required int64 value = 1;\n  required int64 ranged = 2;\n  required int64 minimum = 3;\n  required int64 maximum = 4;\n  required int64 multipleOf = 5;\n}',
);
