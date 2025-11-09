import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_misc_prune_CommentTagRange = (): void => _test_misc_prune(
    "CommentTagRange",
)<CommentTagRange>(
    CommentTagRange
)((input) => typia.misc.prune<CommentTagRange>(input));
