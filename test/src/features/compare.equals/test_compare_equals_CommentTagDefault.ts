import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_compare_equals_CommentTagDefault = _test_compare_equals(
    "CommentTagDefault",
)<CommentTagDefault>(
    CommentTagDefault
)((a, b) => typia.compare.equals<CommentTagDefault>(a, b));
