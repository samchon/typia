import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_assertGuardEquals_CommentTagType = (): void =>
  _test_assertGuardEquals(TypeGuardError)("CommentTagType")<CommentTagType>(
    CommentTagType,
  )((input) => typia.assertGuardEquals<CommentTagType>(input));
