import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_createAssertGuard_CommentTagInfinite = _test_assertGuard(
  TypeGuardError,
)("CommentTagInfinite")<CommentTagInfinite>(CommentTagInfinite)(
  typia.createAssertGuard<CommentTagInfinite>(),
);
