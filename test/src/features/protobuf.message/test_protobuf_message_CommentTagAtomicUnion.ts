import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_protobuf_message_CommentTagAtomicUnion = (): void =>
  _test_protobuf_message("CommentTagAtomicUnion")(
    typia.protobuf.message<CommentTagAtomicUnion>(),
  );
