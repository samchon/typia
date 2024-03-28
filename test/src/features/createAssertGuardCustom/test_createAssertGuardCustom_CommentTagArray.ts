import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_createAssertGuardCustom_CommentTagArray = _test_assertGuard(
  CustomGuardError,
)("CommentTagArray")<CommentTagArray>(CommentTagArray)(
  typia.createAssertGuard<CommentTagArray>((p) => new CustomGuardError(p)),
);
