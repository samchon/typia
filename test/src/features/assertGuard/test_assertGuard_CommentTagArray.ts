import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_assertGuard_CommentTagArray = _test_assertGuard(
  TypeGuardError,
)("CommentTagArray")<CommentTagArray>(CommentTagArray)((input) =>
  typia.assertGuard<CommentTagArray>(input),
);
