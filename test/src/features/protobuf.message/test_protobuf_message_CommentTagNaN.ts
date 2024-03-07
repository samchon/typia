import typia from "typia";
import { CommentTagNaN } from "../../structures/CommentTagNaN";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_CommentTagNaN = _test_protobuf_message(
  "CommentTagNaN",
)(typia.protobuf.message<CommentTagNaN>());
