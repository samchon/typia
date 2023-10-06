import typia from "../../../src";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_misc_assertPrune_CommentTagNaN = _test_misc_assertPrune(
    "CommentTagNaN",
)<CommentTagNaN>(
    CommentTagNaN
)((input) => typia.misc.assertPrune<CommentTagNaN>(input));
