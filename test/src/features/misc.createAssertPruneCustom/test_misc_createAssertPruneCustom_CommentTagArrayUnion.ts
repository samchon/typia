import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_misc_createAssertPruneCustom_CommentTagArrayUnion =
  _test_misc_assertPrune(CustomGuardError)(
    "CommentTagArrayUnion",
  )<CommentTagArrayUnion>(CommentTagArrayUnion)(
    typia.misc.createAssertPrune<CommentTagArrayUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
