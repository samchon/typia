import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_misc_assertClone_CommentTagDefault = _test_misc_assertClone(
  TypeGuardError,
)("CommentTagDefault")<CommentTagDefault>(CommentTagDefault)((input) =>
  typia.misc.assertClone<CommentTagDefault>(input),
);
