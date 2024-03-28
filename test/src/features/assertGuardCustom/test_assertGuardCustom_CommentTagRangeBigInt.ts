import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_assertGuardCustom_CommentTagRangeBigInt = _test_assertGuard(
  CustomGuardError,
)("CommentTagRangeBigInt")<CommentTagRangeBigInt>(CommentTagRangeBigInt)(
  (input) =>
    typia.assertGuard<CommentTagRangeBigInt>(
      input,
      (p) => new CustomGuardError(p),
    ),
);
