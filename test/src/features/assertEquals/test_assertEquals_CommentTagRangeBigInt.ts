import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

import { TypeGuardError } from "typia";

export const test_assertEquals_CommentTagRangeBigInt = _test_assertEquals(
  TypeGuardError,
)("CommentTagRangeBigInt")<CommentTagRangeBigInt>(CommentTagRangeBigInt)(
  (input) => typia.assertEquals<CommentTagRangeBigInt>(input),
);
