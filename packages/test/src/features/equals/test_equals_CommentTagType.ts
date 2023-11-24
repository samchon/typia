import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_equals_CommentTagType = _test_equals(
  "CommentTagType",
)<CommentTagType>(CommentTagType)((input) =>
  typia.equals<CommentTagType>(input),
);
