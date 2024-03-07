import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagType } from "../../structures/CommentTagType";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_CommentTagType =
  _test_assertGuardEquals(TypeGuardError)("CommentTagType")<CommentTagType>(
    CommentTagType,
  )(typia.createAssertGuardEquals<CommentTagType>());
