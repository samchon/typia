import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_misc_createAssertPrune_CommentTagArrayUnion = (): void =>
  _test_misc_assertPrune(TypeGuardError)(
    "CommentTagArrayUnion",
  )<CommentTagArrayUnion>(CommentTagArrayUnion)(
    typia.misc.createAssertPrune<CommentTagArrayUnion>(),
  );
