import typia from "typia";
import { CommentTagDefault } from "../../structures/CommentTagDefault";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_CommentTagDefault = _test_protobuf_message(
  "CommentTagDefault",
)(typia.protobuf.message<CommentTagDefault>());