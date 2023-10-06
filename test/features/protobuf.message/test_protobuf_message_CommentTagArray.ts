import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_protobuf_message_CommentTagArray = _test_protobuf_message(
    "CommentTagArray",
)(typia.protobuf.message<CommentTagArray>());
