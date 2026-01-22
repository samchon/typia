import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_protobuf_message_CommentTagTypeBigInt = (): void =>
  _test_protobuf_message("CommentTagTypeBigInt")(
    typia.protobuf.message<CommentTagTypeBigInt>(),
  );
