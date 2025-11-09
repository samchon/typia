import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_protobuf_message_CommentTagNaN = (): void =>
  _test_protobuf_message("CommentTagNaN")(
    typia.protobuf.message<CommentTagNaN>(),
  );
