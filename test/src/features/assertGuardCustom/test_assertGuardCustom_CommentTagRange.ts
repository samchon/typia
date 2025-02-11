import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_assertGuardCustom_CommentTagRange = _test_assertGuard(
  CustomGuardError,
)("CommentTagRange")<CommentTagRange>(CommentTagRange)((input) =>
  typia.assertGuard<CommentTagRange>(input, (p) => new CustomGuardError(p)),
);
