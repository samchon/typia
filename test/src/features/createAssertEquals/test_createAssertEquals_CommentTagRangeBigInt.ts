import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_createAssertEquals_CommentTagRangeBigInt = _test_assertEquals(
  TypeGuardError,
)("CommentTagRangeBigInt")<CommentTagRangeBigInt>(CommentTagRangeBigInt)(
  typia.createAssertEquals<CommentTagRangeBigInt>(),
);
