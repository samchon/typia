import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_protobuf_message_CommentTagType = _test_protobuf_message(
    "CommentTagType",
)(typia.protobuf.message<CommentTagType>());
