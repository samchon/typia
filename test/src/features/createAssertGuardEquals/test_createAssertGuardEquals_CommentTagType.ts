import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_createAssertGuardEquals_CommentTagType = (): void =>
  _test_assertGuardEquals(TypeGuardError)("CommentTagType")<CommentTagType>(
    CommentTagType,
  )(typia.createAssertGuardEquals<CommentTagType>());
