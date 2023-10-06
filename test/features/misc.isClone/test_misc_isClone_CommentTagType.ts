import typia from "../../../src";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_misc_isClone_CommentTagType = _test_misc_isClone(
    "CommentTagType",
)<CommentTagType>(
    CommentTagType
)((input) => typia.misc.isClone<CommentTagType>(input));
