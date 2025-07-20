import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_misc_assertPrune_CommentTagType = (): void =>
  _test_misc_assertPrune(TypeGuardError)("CommentTagType")<CommentTagType>(
    CommentTagType,
  )((input) => typia.misc.assertPrune<CommentTagType>(input));
