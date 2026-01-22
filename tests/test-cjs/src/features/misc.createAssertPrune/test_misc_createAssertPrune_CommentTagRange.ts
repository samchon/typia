import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_misc_createAssertPrune_CommentTagRange = (): void =>
  _test_misc_assertPrune(TypeGuardError)("CommentTagRange")<CommentTagRange>(
    CommentTagRange,
  )(typia.misc.createAssertPrune<CommentTagRange>());
