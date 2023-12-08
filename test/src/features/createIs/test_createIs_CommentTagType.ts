import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_createIs_CommentTagType = _test_is(
  "CommentTagType",
)<CommentTagType>(CommentTagType)(typia.createIs<CommentTagType>());
