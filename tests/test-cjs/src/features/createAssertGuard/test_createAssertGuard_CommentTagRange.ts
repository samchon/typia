import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_createAssertGuard_CommentTagRange = (): void =>
  _test_assertGuard(TypeGuardError)("CommentTagRange")<CommentTagRange>(
    CommentTagRange,
  )(typia.createAssertGuard<CommentTagRange>());
