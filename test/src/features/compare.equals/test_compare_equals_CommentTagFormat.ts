import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_compare_equals_CommentTagFormat = _test_compare_equals(
    "CommentTagFormat",
)<CommentTagFormat>(
    CommentTagFormat
)((a, b) => typia.compare.equals<CommentTagFormat>(a, b));
