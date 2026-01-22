import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_assertGuardEquals_CommentTagLength = (): void =>
  _test_assertGuardEquals(TypeGuardError)("CommentTagLength")<CommentTagLength>(
    CommentTagLength,
  )((input) => typia.assertGuardEquals<CommentTagLength>(input));
