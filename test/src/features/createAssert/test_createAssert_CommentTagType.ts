import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_createAssert_CommentTagType = _test_assert(
  "CommentTagType",
)<CommentTagType>(CommentTagType)(typia.createAssert<CommentTagType>());
