import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_protobuf_message_CommentTagNaN = _test_protobuf_message(
    "CommentTagNaN",
)(typia.protobuf.message<CommentTagNaN>());
