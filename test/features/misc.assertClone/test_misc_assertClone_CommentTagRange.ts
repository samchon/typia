import typia from "../../../src";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_misc_assertClone_CommentTagRange = _test_misc_assertClone(
    "CommentTagRange",
)<CommentTagRange>(
    CommentTagRange
)((input) => typia.misc.assertClone<CommentTagRange>(input));
