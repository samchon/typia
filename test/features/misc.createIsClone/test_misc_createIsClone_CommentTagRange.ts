import typia from "../../../src";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_misc_createIsClone_CommentTagRange = _test_misc_isClone(
    "CommentTagRange",
)<CommentTagRange>(
    CommentTagRange
)(typia.misc.createIsClone<CommentTagRange>());
