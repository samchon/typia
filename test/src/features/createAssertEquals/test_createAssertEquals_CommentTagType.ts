import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_createAssertEquals_CommentTagType = _test_assertEquals(
  "CommentTagType",
)<CommentTagType>(CommentTagType)(typia.createAssertEquals<CommentTagType>());
