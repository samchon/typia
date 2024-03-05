import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_assertGuardEquals_CommentTagDefault = _test_assertGuardEquals(
  TypeGuardError,
)("CommentTagDefault")<CommentTagDefault>(CommentTagDefault)((input) =>
  typia.assertGuardEquals<CommentTagDefault>(input),
);
