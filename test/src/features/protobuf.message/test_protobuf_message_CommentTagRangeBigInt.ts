import typia from "typia";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_CommentTagRangeBigInt =
  _test_protobuf_message("CommentTagRangeBigInt")(
    typia.protobuf.message<CommentTagRangeBigInt>(),
  );
