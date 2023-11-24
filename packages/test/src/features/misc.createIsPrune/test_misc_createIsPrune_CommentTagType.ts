import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_misc_createIsPrune_CommentTagType = _test_misc_isPrune(
  "CommentTagType",
)<CommentTagType>(CommentTagType)(typia.misc.createIsPrune<CommentTagType>());
