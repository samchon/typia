import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_misc_createIsPrune_CommentTagArrayUnion = _test_misc_isPrune(
  "CommentTagArrayUnion",
)<CommentTagArrayUnion>(CommentTagArrayUnion)(
  typia.misc.createIsPrune<CommentTagArrayUnion>(),
);
