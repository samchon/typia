import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_createAssertGuardEquals_CommentTagRange =
  _test_assertGuardEquals(TypeGuardError)("CommentTagRange")<CommentTagRange>(
    CommentTagRange,
  )(typia.createAssertGuardEquals<CommentTagRange>());
