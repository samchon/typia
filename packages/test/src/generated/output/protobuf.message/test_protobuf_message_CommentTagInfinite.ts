import typia from "typia";

import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { CommentTagInfinite } from "../../../structures/CommentTagInfinite";

export const test_protobuf_message_CommentTagInfinite = _test_protobuf_message(
  "CommentTagInfinite",
)(
  'syntax = "proto3";\n\nmessage CommentTagInfinite {\n    required double value = 1;\n    required double ranged = 2;\n    required double minimum = 3;\n    required double maximum = 4;\n    required double multipleOf = 5;\n    required int32 typed = 6;\n}',
);
