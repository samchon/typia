import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_misc_createValidatePrune_CommentTagNaN = (): void => _test_misc_validatePrune(
    "CommentTagNaN",
)<CommentTagNaN>(
    CommentTagNaN
)(typia.misc.createValidatePrune<CommentTagNaN>());
