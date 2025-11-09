import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_misc_createValidatePrune_CommentTagDefault = (): void => _test_misc_validatePrune(
    "CommentTagDefault",
)<CommentTagDefault>(
    CommentTagDefault
)(typia.misc.createValidatePrune<CommentTagDefault>());
