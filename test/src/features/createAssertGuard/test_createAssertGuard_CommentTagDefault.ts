import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_CommentTagDefault = _test_assertGuard(
  TypeGuardError,
)("CommentTagDefault")<CommentTagDefault>(CommentTagDefault)(
  typia.createAssertGuard<CommentTagDefault>(),
);
