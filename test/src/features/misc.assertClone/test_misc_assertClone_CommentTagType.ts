import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagType } from "../../structures/CommentTagType";

import { TypeGuardError } from "typia";

export const test_misc_assertClone_CommentTagType = _test_misc_assertClone(
  TypeGuardError,
)("CommentTagType")<CommentTagType>(CommentTagType)((input) =>
  typia.misc.assertClone<CommentTagType>(input),
);
