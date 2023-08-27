import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_protobuf_message_CommentTagLength = _test_protobuf_message(
    "CommentTagLength",
)(typia.protobuf.message<CommentTagLength>());
