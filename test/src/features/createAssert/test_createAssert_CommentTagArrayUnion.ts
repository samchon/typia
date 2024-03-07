import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

import { TypeGuardError } from "typia";

export const test_createAssert_CommentTagArrayUnion = _test_assert(
  TypeGuardError,
)("CommentTagArrayUnion")<CommentTagArrayUnion>(CommentTagArrayUnion)(
  typia.createAssert<CommentTagArrayUnion>(),
);
