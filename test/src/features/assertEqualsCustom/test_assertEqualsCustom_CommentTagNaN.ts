import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_assertEqualsCustom_CommentTagNaN = _test_assertEquals(
  CustomGuardError,
)("CommentTagNaN")<CommentTagNaN>(CommentTagNaN)((input) =>
  typia.assertEquals<CommentTagNaN>(input, (p) => new CustomGuardError(p)),
);
