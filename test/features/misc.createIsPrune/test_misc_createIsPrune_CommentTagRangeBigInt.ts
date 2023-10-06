import typia from "../../../src";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_misc_createIsPrune_CommentTagRangeBigInt = _test_misc_isPrune(
    "CommentTagRangeBigInt",
)<CommentTagRangeBigInt>(
    CommentTagRangeBigInt
)(typia.misc.createIsPrune<CommentTagRangeBigInt>());
