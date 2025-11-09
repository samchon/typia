import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_createAssertGuardEquals_CommentTagFormat = (): void =>
  _test_assertGuardEquals(TypeGuardError)("CommentTagFormat")<CommentTagFormat>(
    CommentTagFormat,
  )(typia.createAssertGuardEquals<CommentTagFormat>());
