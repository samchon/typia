import typia from "../../../src";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_CommentTagTypeBigInt = _test_protobuf_message(
    "CommentTagTypeBigInt",
)(typia.protobuf.message<CommentTagTypeBigInt>());