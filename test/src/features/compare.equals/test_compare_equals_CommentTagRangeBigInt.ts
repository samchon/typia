import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_compare_equals_CommentTagRangeBigInt = _test_compare_equals(
    "CommentTagRangeBigInt",
)<CommentTagRangeBigInt>(
    CommentTagRangeBigInt
)((a, b) => typia.compare.equals<CommentTagRangeBigInt>(a, b));
