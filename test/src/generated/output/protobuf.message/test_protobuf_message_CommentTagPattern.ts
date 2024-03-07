import typia from "typia";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
export const test_protobuf_message_CommentTagPattern = _test_protobuf_message(
  "CommentTagPattern",
)(
  'syntax = "proto3";\n\nmessage CommentTagPattern {\n  required string uuid = 1;\n  required string email = 2;\n  required string ipv4 = 3;\n  required string ipv6 = 4;\n}',
);
