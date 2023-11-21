import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_protobuf_message_CommentTagPattern = _test_protobuf_message(
  "CommentTagPattern",
)(typia.protobuf.message<CommentTagPattern>());
