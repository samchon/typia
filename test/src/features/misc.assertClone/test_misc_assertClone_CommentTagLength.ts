import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_misc_assertClone_CommentTagLength = (): void =>
  _test_misc_assertClone(TypeGuardError)("CommentTagLength")<CommentTagLength>(
    CommentTagLength,
  )((input) => typia.misc.assertClone<CommentTagLength>(input));
