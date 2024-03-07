import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_CommentTagFormat = _test_assertGuard(
  TypeGuardError,
)("CommentTagFormat")<CommentTagFormat>(CommentTagFormat)(
  typia.createAssertGuard<CommentTagFormat>(),
);
