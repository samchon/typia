import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_misc_isPrune_CommentTagArrayUnion = (): void =>
  _test_misc_isPrune("CommentTagArrayUnion")<CommentTagArrayUnion>(
    CommentTagArrayUnion,
  )((input) => typia.misc.isPrune<CommentTagArrayUnion>(input));
