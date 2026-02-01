import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_misc_isClone_CommentTagDefault = (): void => _test_misc_isClone(
    "CommentTagDefault",
)<CommentTagDefault>(
    CommentTagDefault
)((input) => typia.misc.isClone<CommentTagDefault>(input));
