import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_assertGuardCustom_CommentTagArrayUnion = (): void =>
  _test_assertGuard(CustomGuardError)(
    "CommentTagArrayUnion",
  )<CommentTagArrayUnion>(CommentTagArrayUnion)((input) =>
    typia.assertGuard<CommentTagArrayUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
