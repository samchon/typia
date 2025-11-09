import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_misc_isPrune_CommentTagPattern = (): void => _test_misc_isPrune(
    "CommentTagPattern",
)<CommentTagPattern>(
    CommentTagPattern
)((input) => typia.misc.isPrune<CommentTagPattern>(input));
