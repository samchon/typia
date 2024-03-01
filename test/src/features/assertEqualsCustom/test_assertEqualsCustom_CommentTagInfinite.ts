import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_assertEqualsCustom_CommentTagInfinite = _test_assertEquals(
  CustomGuardError,
)("CommentTagInfinite")<CommentTagInfinite>(CommentTagInfinite)((input) =>
  typia.assertEquals<CommentTagInfinite>(input, (p) => new CustomGuardError(p)),
);
