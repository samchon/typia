import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_misc_createIsPrune_CommentTagLength = (): void => _test_misc_isPrune(
    "CommentTagLength",
)<CommentTagLength>(
    CommentTagLength
)(typia.misc.createIsPrune<CommentTagLength>());
