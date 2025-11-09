import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_misc_clone_CommentTagArray = (): void => _test_misc_clone(
    "CommentTagArray",
)<CommentTagArray>(
    CommentTagArray
)((input) => typia.misc.clone<CommentTagArray>(input));
