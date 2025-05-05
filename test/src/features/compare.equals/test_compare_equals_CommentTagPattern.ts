import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_compare_equals_CommentTagPattern = _test_compare_equals(
    "CommentTagPattern",
)<CommentTagPattern>(
    CommentTagPattern
)((a, b) => typia.compare.equals<CommentTagPattern>(a, b));
