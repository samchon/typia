import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_CommentTagFormat = _test_assertGuardEquals(
  TypeGuardError,
)("CommentTagFormat")<CommentTagFormat>(CommentTagFormat)((input) =>
  typia.assertGuardEquals<CommentTagFormat>(input),
);
