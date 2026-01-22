import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_createIs_CommentTagArrayUnion = (): void =>
  _test_is("CommentTagArrayUnion")<CommentTagArrayUnion>(CommentTagArrayUnion)(
    typia.createIs<CommentTagArrayUnion>(),
  );
