import typia from "../../../src";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_misc_createIsClone_CommentTagArray = _test_misc_isClone(
    "CommentTagArray",
)<CommentTagArray>(
    CommentTagArray
)(typia.misc.createIsClone<CommentTagArray>());
