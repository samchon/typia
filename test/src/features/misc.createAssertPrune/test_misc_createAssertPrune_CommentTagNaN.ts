import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_misc_createAssertPrune_CommentTagNaN = _test_misc_assertPrune(
  "CommentTagNaN",
)<CommentTagNaN>(CommentTagNaN)(typia.misc.createAssertPrune<CommentTagNaN>());
