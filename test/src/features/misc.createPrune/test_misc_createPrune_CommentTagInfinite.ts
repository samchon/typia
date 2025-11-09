import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_misc_createPrune_CommentTagInfinite = (): void => _test_misc_prune(
    "CommentTagInfinite",
)<CommentTagInfinite>(
    CommentTagInfinite
)(typia.misc.createPrune<CommentTagInfinite>());
