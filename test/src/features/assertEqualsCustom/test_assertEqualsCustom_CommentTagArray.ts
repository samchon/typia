import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_assertEqualsCustom_CommentTagArray = _test_assertEquals(
  CustomGuardError,
)("CommentTagArray")<CommentTagArray>(CommentTagArray)((input) =>
  typia.assertEquals<CommentTagArray>(input, (p) => new CustomGuardError(p)),
);
