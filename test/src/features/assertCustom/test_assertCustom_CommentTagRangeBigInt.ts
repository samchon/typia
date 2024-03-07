import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_CommentTagRangeBigInt = _test_assert(
  CustomGuardError,
)("CommentTagRangeBigInt")<CommentTagRangeBigInt>(CommentTagRangeBigInt)(
  (input) =>
    typia.assert<CommentTagRangeBigInt>(input, (p) => new CustomGuardError(p)),
);
