import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_createAssertGuard_CommentTagFormat = (): void =>
  _test_assertGuard(TypeGuardError)("CommentTagFormat")<CommentTagFormat>(
    CommentTagFormat,
  )(typia.createAssertGuard<CommentTagFormat>());
