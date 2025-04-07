import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_compare_equals_CommentTagType = _test_compare_equals(
    "CommentTagType",
)<CommentTagType>(
    CommentTagType
)((a, b) => typia.compare.equals<CommentTagType>(a, b));
