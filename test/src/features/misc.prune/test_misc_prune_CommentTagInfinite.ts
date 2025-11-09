import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_misc_prune_CommentTagInfinite = (): void => _test_misc_prune(
    "CommentTagInfinite",
)<CommentTagInfinite>(
    CommentTagInfinite
)((input) => typia.misc.prune<CommentTagInfinite>(input));
