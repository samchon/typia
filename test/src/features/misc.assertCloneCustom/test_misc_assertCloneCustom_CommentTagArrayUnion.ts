import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_misc_assertCloneCustom_CommentTagArrayUnion = (): void =>
  _test_misc_assertClone(CustomGuardError)(
    "CommentTagArrayUnion",
  )<CommentTagArrayUnion>(CommentTagArrayUnion)((input) =>
    typia.misc.assertClone<CommentTagArrayUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
