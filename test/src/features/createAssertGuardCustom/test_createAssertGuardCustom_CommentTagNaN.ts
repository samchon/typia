import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_createAssertGuardCustom_CommentTagNaN = _test_assertGuard(
  CustomGuardError,
)("CommentTagNaN")<CommentTagNaN>(CommentTagNaN)(
  typia.createAssertGuard<CommentTagNaN>((p) => new CustomGuardError(p)),
);
