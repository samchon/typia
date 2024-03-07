import typia from "typia";
import { CommentTagTypeBigInt } from "../../../structures/CommentTagTypeBigInt";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
export const test_protobuf_message_CommentTagTypeBigInt =
  _test_protobuf_message("CommentTagTypeBigInt")(
    'syntax = "proto3";\n\nmessage CommentTagTypeBigInt {\n  required int64 in64 = 1;\n  required uint64 uint64 = 2;\n}',
  );
