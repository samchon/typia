import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_protobuf_message_CommentTagInfinite = (): void =>
  _test_protobuf_message("CommentTagInfinite")(
    typia.protobuf.message<CommentTagInfinite>(),
  );
