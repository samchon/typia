import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_misc_createClone_CommentTagType = _test_misc_clone(
  "CommentTagType",
)<CommentTagType>(CommentTagType)(typia.misc.createClone<CommentTagType>());
