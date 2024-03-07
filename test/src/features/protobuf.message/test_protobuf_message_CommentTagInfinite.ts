import typia from "typia";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_CommentTagInfinite = _test_protobuf_message(
  "CommentTagInfinite",
)(typia.protobuf.message<CommentTagInfinite>());
