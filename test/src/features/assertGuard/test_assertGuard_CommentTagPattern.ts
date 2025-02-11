import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_assertGuard_CommentTagPattern = _test_assertGuard(
  TypeGuardError,
)("CommentTagPattern")<CommentTagPattern>(CommentTagPattern)((input) =>
  typia.assertGuard<CommentTagPattern>(input),
);
