import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_assertGuardEquals_CommentTagArrayUnion = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "CommentTagArrayUnion",
  )<CommentTagArrayUnion>(CommentTagArrayUnion)((input) =>
    typia.assertGuardEquals<CommentTagArrayUnion>(input),
  );
