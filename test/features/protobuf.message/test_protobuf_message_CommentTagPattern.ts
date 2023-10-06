import typia from "../../../src";
import { CommentTagPattern } from "../../structures/CommentTagPattern";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_CommentTagPattern = _test_protobuf_message(
    "CommentTagPattern",
)(typia.protobuf.message<CommentTagPattern>());