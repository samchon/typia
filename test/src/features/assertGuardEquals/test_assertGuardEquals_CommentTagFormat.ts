import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_assertGuardEquals_CommentTagFormat = _test_assertGuardEquals(
  TypeGuardError,
)("CommentTagFormat")<CommentTagFormat>(CommentTagFormat)((input) =>
  typia.assertGuardEquals<CommentTagFormat>(input),
);
