import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_assertGuardEquals_CommentTagPattern = _test_assertGuardEquals(
  TypeGuardError,
)("CommentTagPattern")<CommentTagPattern>(CommentTagPattern)((input) =>
  typia.assertGuardEquals<CommentTagPattern>(input),
);
