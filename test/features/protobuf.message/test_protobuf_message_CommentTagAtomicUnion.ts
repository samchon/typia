import typia from "../../../src";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_CommentTagAtomicUnion = _test_protobuf_message(
    "CommentTagAtomicUnion",
)(typia.protobuf.message<CommentTagAtomicUnion>());