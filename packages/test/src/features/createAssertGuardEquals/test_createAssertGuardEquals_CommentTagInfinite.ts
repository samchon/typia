import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_createAssertGuardEquals_CommentTagInfinite =
  _test_assertGuardEquals("CommentTagInfinite")<CommentTagInfinite>(
    CommentTagInfinite,
  )(typia.createAssertGuardEquals<CommentTagInfinite>());
