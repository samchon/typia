import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_is_CommentTagArrayUnion = (): void => _test_is(
    "CommentTagArrayUnion",
)<CommentTagArrayUnion>(
    CommentTagArrayUnion
)((input) => typia.is<CommentTagArrayUnion>(input));
