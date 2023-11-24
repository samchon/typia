import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_assertEquals_CommentTagType = _test_assertEquals(
  "CommentTagType",
)<CommentTagType>(CommentTagType)((input) =>
  typia.assertEquals<CommentTagType>(input),
);
