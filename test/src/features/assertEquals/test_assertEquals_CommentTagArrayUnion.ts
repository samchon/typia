import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

import { TypeGuardError } from "typia";

export const test_assertEquals_CommentTagArrayUnion = _test_assertEquals(
  TypeGuardError,
)("CommentTagArrayUnion")<CommentTagArrayUnion>(CommentTagArrayUnion)((input) =>
  typia.assertEquals<CommentTagArrayUnion>(input),
);
