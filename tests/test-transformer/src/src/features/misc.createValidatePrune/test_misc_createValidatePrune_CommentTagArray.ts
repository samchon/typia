import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_misc_createValidatePrune_CommentTagArray = (): void => _test_misc_validatePrune(
    "CommentTagArray",
)<CommentTagArray>(
    CommentTagArray
)(typia.misc.createValidatePrune<CommentTagArray>());
