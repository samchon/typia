import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_misc_isPrune_CommentTagTypeBigInt = (): void => _test_misc_isPrune(
    "CommentTagTypeBigInt",
)<CommentTagTypeBigInt>(
    CommentTagTypeBigInt
)((input) => typia.misc.isPrune<CommentTagTypeBigInt>(input));
