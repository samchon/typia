import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_assertGuard_CommentTagInfinite = (): void =>
  _test_assertGuard(TypeGuardError)("CommentTagInfinite")<CommentTagInfinite>(
    CommentTagInfinite,
  )((input) => typia.assertGuard<CommentTagInfinite>(input));
