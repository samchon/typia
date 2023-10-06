import typia from "../../../src";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_misc_isPrune_CommentTagLength = _test_misc_isPrune(
    "CommentTagLength",
)<CommentTagLength>(
    CommentTagLength
)((input) => typia.misc.isPrune<CommentTagLength>(input));
