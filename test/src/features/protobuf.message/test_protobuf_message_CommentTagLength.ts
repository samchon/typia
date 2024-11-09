import typia from "typia";
import { CommentTagLength } from "../../structures/CommentTagLength";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_CommentTagLength = _test_protobuf_message(
  "CommentTagLength",
)(typia.protobuf.message<CommentTagLength>());