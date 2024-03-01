import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_createAssertGuardCustom_CommentTagFormat = _test_assertGuard(
  CustomGuardError,
)("CommentTagFormat")<CommentTagFormat>(CommentTagFormat)(
  typia.createAssertGuard<CommentTagFormat>((p) => new CustomGuardError(p)),
);
