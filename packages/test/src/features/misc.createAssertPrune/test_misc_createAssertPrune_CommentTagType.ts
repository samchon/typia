import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_misc_createAssertPrune_CommentTagType =
  _test_misc_assertPrune("CommentTagType")<CommentTagType>(CommentTagType)(
    typia.misc.createAssertPrune<CommentTagType>(),
  );
