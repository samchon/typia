import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_misc_prune_CommentTagNaN = (): void => _test_misc_prune(
    "CommentTagNaN",
)<CommentTagNaN>(
    CommentTagNaN
)((input) => typia.misc.prune<CommentTagNaN>(input));
