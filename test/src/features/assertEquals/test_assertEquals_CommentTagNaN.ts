import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_assertEquals_CommentTagNaN = _test_assertEquals(
  TypeGuardError,
)("CommentTagNaN")<CommentTagNaN>(CommentTagNaN)((input) =>
  typia.assertEquals<CommentTagNaN>(input),
);
