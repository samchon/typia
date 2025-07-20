import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_protobuf_message_CommentTagDefault = (): void =>
  _test_protobuf_message("CommentTagDefault")(
    typia.protobuf.message<CommentTagDefault>(),
  );
