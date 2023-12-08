import typia from "typia";

import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";

export const test_protobuf_message_CommentTagFormat = _test_protobuf_message(
  "CommentTagFormat",
)(
  'syntax = "proto3";\n\nmessage CommentTagFormat {\n    required string uuid = 1;\n    required string email = 2;\n    required string url = 3;\n    required string ipv4 = 4;\n    required string ipv6 = 5;\n    required string date = 6;\n    required string date_time = 7;\n    required string custom = 8;\n}',
);
