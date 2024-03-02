import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_misc_assertClone_CommentTagArrayUnion =
  _test_misc_assertClone(TypeGuardError)(
    "CommentTagArrayUnion",
  )<CommentTagArrayUnion>(CommentTagArrayUnion)((input) =>
    typia.misc.assertClone<CommentTagArrayUnion>(input),
  );
