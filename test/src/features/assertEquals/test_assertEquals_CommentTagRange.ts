import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_assertEquals_CommentTagRange = _test_assertEquals(
  TypeGuardError,
)("CommentTagRange")<CommentTagRange>(CommentTagRange)((input) =>
  typia.assertEquals<CommentTagRange>(input),
);
