import typia from "typia";
import { CommentTagType } from "../../structures/CommentTagType";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_CommentTagType = _test_protobuf_message(
  "CommentTagType",
)(typia.protobuf.message<CommentTagType>());
