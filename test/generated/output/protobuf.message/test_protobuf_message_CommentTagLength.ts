import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { CommentTagLength } from "../../../structures/CommentTagLength";

export const test_protobuf_message_CommentTagLength = _test_protobuf_message(
  "CommentTagLength",
)(
  'syntax = "proto3";\n\nmessage CommentTagLength {\n    repeated CommentTagLength.Type value = 1;\n    message Type {\n        required string fixed = 1;\n        required string minimum = 2;\n        required string maximum = 3;\n        required string minimum_and_maximum = 4;\n        required string equal = 5;\n    }\n}',
);
