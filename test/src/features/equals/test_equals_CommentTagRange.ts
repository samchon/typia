import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_equals_CommentTagRange = _test_equals(
  "CommentTagRange",
)<CommentTagRange>(CommentTagRange)((input) =>
  typia.equals<CommentTagRange>(input),
);
