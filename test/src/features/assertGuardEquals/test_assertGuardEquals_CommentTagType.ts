import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagType } from "../../structures/CommentTagType";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_CommentTagType = _test_assertGuardEquals(
  TypeGuardError,
)("CommentTagType")<CommentTagType>(CommentTagType)((input) =>
  typia.assertGuardEquals<CommentTagType>(input),
);
