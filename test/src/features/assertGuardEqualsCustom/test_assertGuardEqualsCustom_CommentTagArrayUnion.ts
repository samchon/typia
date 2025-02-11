import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_assertGuardEqualsCustom_CommentTagArrayUnion =
  _test_assertGuardEquals(CustomGuardError)(
    "CommentTagArrayUnion",
  )<CommentTagArrayUnion>(CommentTagArrayUnion)((input) =>
    typia.assertGuardEquals<CommentTagArrayUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
