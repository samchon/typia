import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_misc_createPrune_CommentTagNaN = _test_misc_prune(
  "CommentTagNaN",
)<CommentTagNaN>(CommentTagNaN)(typia.misc.createPrune<CommentTagNaN>());
