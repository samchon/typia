import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_equals_CommentTagArrayUnion = (): void => _test_equals(
    "CommentTagArrayUnion",
)<CommentTagArrayUnion>(
    CommentTagArrayUnion
)((input) => typia.equals<CommentTagArrayUnion>(input));
