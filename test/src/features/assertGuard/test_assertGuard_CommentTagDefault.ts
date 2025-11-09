import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_assertGuard_CommentTagDefault = (): void =>
  _test_assertGuard(TypeGuardError)("CommentTagDefault")<CommentTagDefault>(
    CommentTagDefault,
  )((input) => typia.assertGuard<CommentTagDefault>(input));
