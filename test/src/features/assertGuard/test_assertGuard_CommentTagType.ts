import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_assertGuard_CommentTagType = (): void =>
  _test_assertGuard(TypeGuardError)("CommentTagType")<CommentTagType>(
    CommentTagType,
  )((input) => typia.assertGuard<CommentTagType>(input));
