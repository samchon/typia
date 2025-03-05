import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_compare_equals_CommentTagArray = _test_compare_equals(
    "CommentTagArray",
)<CommentTagArray>(
    CommentTagArray
)((a, b) => typia.compare.equals<CommentTagArray>(a, b));
