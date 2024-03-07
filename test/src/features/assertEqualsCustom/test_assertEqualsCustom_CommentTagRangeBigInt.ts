import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_CommentTagRangeBigInt = _test_assertEquals(
  CustomGuardError,
)("CommentTagRangeBigInt")<CommentTagRangeBigInt>(CommentTagRangeBigInt)(
  (input) =>
    typia.assertEquals<CommentTagRangeBigInt>(
      input,
      (p) => new CustomGuardError(p),
    ),
);
