import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_compare_equals_CommentTagLength = _test_compare_equals(
    "CommentTagLength",
)<CommentTagLength>(
    CommentTagLength
)((a, b) => typia.compare.equals<CommentTagLength>(a, b));
