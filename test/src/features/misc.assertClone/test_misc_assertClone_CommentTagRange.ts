import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_misc_assertClone_CommentTagRange = (): void =>
  _test_misc_assertClone(TypeGuardError)("CommentTagRange")<CommentTagRange>(
    CommentTagRange,
  )((input) => typia.misc.assertClone<CommentTagRange>(input));
