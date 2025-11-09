import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_assertGuard_CommentTagArrayUnion = (): void =>
  _test_assertGuard(TypeGuardError)(
    "CommentTagArrayUnion",
  )<CommentTagArrayUnion>(CommentTagArrayUnion)((input) =>
    typia.assertGuard<CommentTagArrayUnion>(input),
  );
