import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_protobuf_message_CommentTagType = (): void =>
  _test_protobuf_message("CommentTagType")(
    typia.protobuf.message<CommentTagType>(),
  );
