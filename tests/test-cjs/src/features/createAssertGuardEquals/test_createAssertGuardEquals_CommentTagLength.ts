import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_createAssertGuardEquals_CommentTagLength = (): void =>
  _test_assertGuardEquals(TypeGuardError)("CommentTagLength")<CommentTagLength>(
    CommentTagLength,
  )(typia.createAssertGuardEquals<CommentTagLength>());
