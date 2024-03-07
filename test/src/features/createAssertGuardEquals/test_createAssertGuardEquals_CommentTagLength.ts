import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagLength } from "../../structures/CommentTagLength";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_CommentTagLength =
  _test_assertGuardEquals(TypeGuardError)("CommentTagLength")<CommentTagLength>(
    CommentTagLength,
  )(typia.createAssertGuardEquals<CommentTagLength>());
