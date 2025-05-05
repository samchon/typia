import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_compare_equals_CommentTagRange = _test_compare_equals(
    "CommentTagRange",
)<CommentTagRange>(
    CommentTagRange
)((a, b) => typia.compare.equals<CommentTagRange>(a, b));
