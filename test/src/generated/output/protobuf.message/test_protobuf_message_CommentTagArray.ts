import typia from "typia";

import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { CommentTagArray } from "../../../structures/CommentTagArray";

export const test_protobuf_message_CommentTagArray = _test_protobuf_message(
  "CommentTagArray",
)(
  'syntax = "proto3";\n\nmessage CommentTagArray {\n    repeated CommentTagArray.Type value = 1;\n    message Type {\n        repeated string items = 1;\n        repeated double minItems = 2;\n        repeated string both = 3;\n        repeated double equal = 4;\n    }\n}',
);
