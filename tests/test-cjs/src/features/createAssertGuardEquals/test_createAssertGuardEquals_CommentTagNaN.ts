import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_createAssertGuardEquals_CommentTagNaN = (): void =>
  _test_assertGuardEquals(TypeGuardError)("CommentTagNaN")<CommentTagNaN>(
    CommentTagNaN,
  )(typia.createAssertGuardEquals<CommentTagNaN>());
