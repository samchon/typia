import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_protobuf_message_CommentTagRangeBigInt = (): void =>
  _test_protobuf_message("CommentTagRangeBigInt")(
    typia.protobuf.message<CommentTagRangeBigInt>(),
  );
