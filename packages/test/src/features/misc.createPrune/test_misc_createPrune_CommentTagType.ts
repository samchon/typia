import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_misc_createPrune_CommentTagType = _test_misc_prune(
  "CommentTagType",
)<CommentTagType>(CommentTagType)(typia.misc.createPrune<CommentTagType>());
