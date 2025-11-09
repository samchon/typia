import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_misc_prune_CommentTagArray = (): void => _test_misc_prune(
    "CommentTagArray",
)<CommentTagArray>(
    CommentTagArray
)((input) => typia.misc.prune<CommentTagArray>(input));
