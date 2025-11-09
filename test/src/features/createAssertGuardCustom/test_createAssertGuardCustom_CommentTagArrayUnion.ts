import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_createAssertGuardCustom_CommentTagArrayUnion = (): void =>
  _test_assertGuard(CustomGuardError)(
    "CommentTagArrayUnion",
  )<CommentTagArrayUnion>(CommentTagArrayUnion)(
    typia.createAssertGuard<CommentTagArrayUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
