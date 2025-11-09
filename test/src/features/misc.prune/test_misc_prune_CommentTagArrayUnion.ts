import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_misc_prune_CommentTagArrayUnion = (): void => _test_misc_prune(
    "CommentTagArrayUnion",
)<CommentTagArrayUnion>(
    CommentTagArrayUnion
)((input) => typia.misc.prune<CommentTagArrayUnion>(input));
