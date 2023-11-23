import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_misc_createIsClone_CommentTagType = _test_misc_isClone(
  "CommentTagType",
)<CommentTagType>(CommentTagType)(typia.misc.createIsClone<CommentTagType>());
