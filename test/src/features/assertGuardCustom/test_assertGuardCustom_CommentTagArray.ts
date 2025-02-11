import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_assertGuardCustom_CommentTagArray = _test_assertGuard(
  CustomGuardError,
)("CommentTagArray")<CommentTagArray>(CommentTagArray)((input) =>
  typia.assertGuard<CommentTagArray>(input, (p) => new CustomGuardError(p)),
);
