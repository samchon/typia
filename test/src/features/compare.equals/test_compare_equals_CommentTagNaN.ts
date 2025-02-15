import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_compare_equals_CommentTagNaN = _test_compare_equals(
    "CommentTagNaN",
)<CommentTagNaN>(
    CommentTagNaN
)((a, b) => typia.compare.equals<CommentTagNaN>(a, b));
