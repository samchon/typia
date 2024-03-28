import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_createAssertGuardEqualsCustom_CommentTagArrayUnion =
  _test_assertGuardEquals(CustomGuardError)(
    "CommentTagArrayUnion",
  )<CommentTagArrayUnion>(CommentTagArrayUnion)(
    typia.createAssertGuardEquals<CommentTagArrayUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
