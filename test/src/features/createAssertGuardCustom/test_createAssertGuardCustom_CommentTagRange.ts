import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagRange } from "../../structures/CommentTagRange";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_CommentTagRange = _test_assertGuard(
  CustomGuardError,
)("CommentTagRange")<CommentTagRange>(CommentTagRange)(
  typia.createAssertGuard<CommentTagRange>((p) => new CustomGuardError(p)),
);
