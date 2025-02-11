import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_assertGuardCustom_CommentTagBigInt = _test_assertGuard(
  CustomGuardError,
)("CommentTagBigInt")<CommentTagBigInt>(CommentTagBigInt)((input) =>
  typia.assertGuard<CommentTagBigInt>(input, (p) => new CustomGuardError(p)),
);
