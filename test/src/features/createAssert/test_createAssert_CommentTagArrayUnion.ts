import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_createAssert_CommentTagArrayUnion = _test_assert(
  TypeGuardError,
)("CommentTagArrayUnion")<CommentTagArrayUnion>(CommentTagArrayUnion)(
  typia.createAssert<CommentTagArrayUnion>(),
);
