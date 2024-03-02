import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_misc_assertClone_CommentTagPattern = _test_misc_assertClone(
  TypeGuardError,
)("CommentTagPattern")<CommentTagPattern>(CommentTagPattern)((input) =>
  typia.misc.assertClone<CommentTagPattern>(input),
);
