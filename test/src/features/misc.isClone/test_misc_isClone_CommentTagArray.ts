import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_misc_isClone_CommentTagArray = (): void => _test_misc_isClone(
    "CommentTagArray",
)<CommentTagArray>(
    CommentTagArray
)((input) => typia.misc.isClone<CommentTagArray>(input));
