import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_assertEqualsCustom_CommentTagBigInt = _test_assertEquals(
  CustomGuardError,
)("CommentTagBigInt")<CommentTagBigInt>(CommentTagBigInt)((input) =>
  typia.assertEquals<CommentTagBigInt>(input, (p) => new CustomGuardError(p)),
);
