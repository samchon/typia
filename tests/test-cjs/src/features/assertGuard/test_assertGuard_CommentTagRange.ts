import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_assertGuard_CommentTagRange = (): void =>
  _test_assertGuard(TypeGuardError)("CommentTagRange")<CommentTagRange>(
    CommentTagRange,
  )((input) => typia.assertGuard<CommentTagRange>(input));
