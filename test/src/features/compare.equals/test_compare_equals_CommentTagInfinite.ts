import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_compare_equals_CommentTagInfinite = _test_compare_equals(
    "CommentTagInfinite",
)<CommentTagInfinite>(
    CommentTagInfinite
)((a, b) => typia.compare.equals<CommentTagInfinite>(a, b));
