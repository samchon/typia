import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_reflect_metadata_CommentTagArrayUnion =
  _test_reflect_metadata("CommentTagArrayUnion")(
    typia.reflect.metadata<[CommentTagArrayUnion]>(),
  );
