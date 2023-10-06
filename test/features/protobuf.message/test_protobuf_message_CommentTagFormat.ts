import typia from "../../../src";
import { CommentTagFormat } from "../../structures/CommentTagFormat";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_CommentTagFormat = _test_protobuf_message(
    "CommentTagFormat",
)(typia.protobuf.message<CommentTagFormat>());