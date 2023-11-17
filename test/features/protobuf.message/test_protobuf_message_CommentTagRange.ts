import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_protobuf_message_CommentTagRange = _test_protobuf_message(
  "CommentTagRange",
)(typia.protobuf.message<CommentTagRange>());
