import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_createEquals_CommentTagRange = _test_equals(
    "CommentTagRange",
)<CommentTagRange>(
    CommentTagRange
)(typia.createEquals<CommentTagRange>());
