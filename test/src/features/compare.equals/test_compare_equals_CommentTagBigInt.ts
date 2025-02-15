import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_compare_equals_CommentTagBigInt = _test_compare_equals(
    "CommentTagBigInt",
)<CommentTagBigInt>(
    CommentTagBigInt
)((a, b) => typia.compare.equals<CommentTagBigInt>(a, b));
