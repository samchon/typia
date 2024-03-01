import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_createAssertGuardCustom_CommentTagLength = _test_assertGuard(
  CustomGuardError,
)("CommentTagLength")<CommentTagLength>(CommentTagLength)(
  typia.createAssertGuard<CommentTagLength>((p) => new CustomGuardError(p)),
);
