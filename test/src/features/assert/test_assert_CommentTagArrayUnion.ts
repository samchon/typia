import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_assert_CommentTagArrayUnion = (): void =>
  _test_assert(TypeGuardError)("CommentTagArrayUnion")<CommentTagArrayUnion>(
    CommentTagArrayUnion,
  )((input) => typia.assert<CommentTagArrayUnion>(input));
