import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_CommentTagArrayUnion = _test_assertEquals(
  CustomGuardError,
)("CommentTagArrayUnion")<CommentTagArrayUnion>(CommentTagArrayUnion)((input) =>
  typia.assertEquals<CommentTagArrayUnion>(
    input,
    (p) => new CustomGuardError(p),
  ),
);
