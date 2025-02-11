import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_assert_CommentTagRangeBigInt = _test_assert(TypeGuardError)(
  "CommentTagRangeBigInt",
)<CommentTagRangeBigInt>(CommentTagRangeBigInt)((input) =>
  typia.assert<CommentTagRangeBigInt>(input),
);
