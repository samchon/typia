import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_CommentTagNaN = _test_assertGuard(
  TypeGuardError,
)("CommentTagNaN")<CommentTagNaN>(CommentTagNaN)(
  typia.createAssertGuard<CommentTagNaN>(),
);
