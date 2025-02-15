import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_compare_equals_CommentTagArrayUnion = _test_compare_equals(
    "CommentTagArrayUnion",
)<CommentTagArrayUnion>(
    CommentTagArrayUnion
)((a, b) => typia.compare.equals<CommentTagArrayUnion>(a, b));
