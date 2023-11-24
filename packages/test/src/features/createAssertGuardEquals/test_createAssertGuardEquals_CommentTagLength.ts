import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_createAssertGuardEquals_CommentTagLength =
  _test_assertGuardEquals("CommentTagLength")<CommentTagLength>(
    CommentTagLength,
  )(typia.createAssertGuardEquals<CommentTagLength>());
