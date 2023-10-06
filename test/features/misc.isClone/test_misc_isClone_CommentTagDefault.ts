import typia from "../../../src";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_misc_isClone_CommentTagDefault = _test_misc_isClone(
    "CommentTagDefault",
)<CommentTagDefault>(
    CommentTagDefault
)((input) => typia.misc.isClone<CommentTagDefault>(input));
