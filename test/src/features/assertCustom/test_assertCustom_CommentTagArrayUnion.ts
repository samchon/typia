import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_assertCustom_CommentTagArrayUnion = _test_assert(
  CustomGuardError,
)("CommentTagArrayUnion")<CommentTagArrayUnion>(CommentTagArrayUnion)((input) =>
  typia.assert<CommentTagArrayUnion>(input, (p) => new CustomGuardError(p)),
);
