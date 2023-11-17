import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_protobuf_message_CommentTagBigInt = _test_protobuf_message(
  "CommentTagBigInt",
)(typia.protobuf.message<CommentTagBigInt>());
