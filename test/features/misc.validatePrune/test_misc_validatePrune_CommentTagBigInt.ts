import typia from "../../../src";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_misc_validatePrune_CommentTagBigInt = _test_misc_validatePrune(
    "CommentTagBigInt",
)<CommentTagBigInt>(
    CommentTagBigInt
)((input) => typia.misc.validatePrune<CommentTagBigInt>(input));
