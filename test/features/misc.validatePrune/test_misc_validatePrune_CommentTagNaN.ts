import typia from "../../../src";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_misc_validatePrune_CommentTagNaN = _test_misc_validatePrune(
    "CommentTagNaN",
)<CommentTagNaN>(
    CommentTagNaN
)((input) => typia.misc.validatePrune<CommentTagNaN>(input));
