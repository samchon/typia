import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_misc_createAssertPrune_CommentTagPattern =
  _test_misc_assertPrune("CommentTagPattern")<CommentTagPattern>(
    CommentTagPattern,
  )(typia.misc.createAssertPrune<CommentTagPattern>());
