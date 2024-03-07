import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_CommentTagArrayUnion =
  _test_misc_assertClone(CustomGuardError)(
    "CommentTagArrayUnion",
  )<CommentTagArrayUnion>(CommentTagArrayUnion)(
    typia.misc.createAssertClone<CommentTagArrayUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
