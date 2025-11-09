import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_protobuf_message_CommentTagBigInt = (): void =>
  _test_protobuf_message("CommentTagBigInt")(
    typia.protobuf.message<CommentTagBigInt>(),
  );
