import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_misc_assertClone_CommentTagType = (): void =>
  _test_misc_assertClone(TypeGuardError)("CommentTagType")<CommentTagType>(
    CommentTagType,
  )((input) => typia.misc.assertClone<CommentTagType>(input));
