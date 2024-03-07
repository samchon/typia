import typia from "typia";
import { CommentTagBigInt } from "../../../structures/CommentTagBigInt";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
export const test_protobuf_message_CommentTagBigInt = _test_protobuf_message(
  "CommentTagBigInt",
)(
  'syntax = "proto3";\n\nmessage CommentTagBigInt {\n  required int64 value = 1;\n  required int64 ranged = 2;\n  required int64 minimum = 3;\n  required int64 maximum = 4;\n  required int64 multipleOf = 5;\n}',
);
