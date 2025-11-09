import typia from "typia";
import { CommentTagArray } from "../../structures/CommentTagArray";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_CommentTagArray = (): void => _test_protobuf_message(
  "CommentTagArray",
)(typia.protobuf.message<CommentTagArray>());