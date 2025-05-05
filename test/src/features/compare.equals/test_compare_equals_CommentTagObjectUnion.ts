import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_compare_equals_CommentTagObjectUnion = _test_compare_equals(
    "CommentTagObjectUnion",
)<CommentTagObjectUnion>(
    CommentTagObjectUnion
)((a, b) => typia.compare.equals<CommentTagObjectUnion>(a, b));
