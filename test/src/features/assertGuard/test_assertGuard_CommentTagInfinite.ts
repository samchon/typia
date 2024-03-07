import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

import { TypeGuardError } from "typia";

export const test_assertGuard_CommentTagInfinite = _test_assertGuard(
  TypeGuardError,
)("CommentTagInfinite")<CommentTagInfinite>(CommentTagInfinite)((input) =>
  typia.assertGuard<CommentTagInfinite>(input),
);
