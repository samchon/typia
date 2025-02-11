import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_assertEqualsCustom_CommentTagPattern = _test_assertEquals(
  CustomGuardError,
)("CommentTagPattern")<CommentTagPattern>(CommentTagPattern)((input) =>
  typia.assertEquals<CommentTagPattern>(input, (p) => new CustomGuardError(p)),
);
