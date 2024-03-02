import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_createAssertGuardCustom_CommentTagDefault = _test_assertGuard(
  CustomGuardError,
)("CommentTagDefault")<CommentTagDefault>(CommentTagDefault)(
  typia.createAssertGuard<CommentTagDefault>((p) => new CustomGuardError(p)),
);
