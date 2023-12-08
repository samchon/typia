import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_createAssertGuardEquals_CommentTagBigInt =
  _test_assertGuardEquals("CommentTagBigInt")<CommentTagBigInt>(
    CommentTagBigInt,
  )(typia.createAssertGuardEquals<CommentTagBigInt>());
