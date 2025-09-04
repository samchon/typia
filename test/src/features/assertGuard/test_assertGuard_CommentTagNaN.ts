import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_assertGuard_CommentTagNaN = (): void =>
  _test_assertGuard(TypeGuardError)("CommentTagNaN")<CommentTagNaN>(
    CommentTagNaN,
  )((input) => typia.assertGuard<CommentTagNaN>(input));
