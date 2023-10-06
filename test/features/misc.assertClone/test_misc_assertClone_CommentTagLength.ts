import typia from "../../../src";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_misc_assertClone_CommentTagLength = _test_misc_assertClone(
    "CommentTagLength",
)<CommentTagLength>(
    CommentTagLength
)((input) => typia.misc.assertClone<CommentTagLength>(input));
