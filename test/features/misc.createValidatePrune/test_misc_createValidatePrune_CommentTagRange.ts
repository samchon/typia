import typia from "../../../src";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_misc_createValidatePrune_CommentTagRange = _test_misc_validatePrune(
    "CommentTagRange",
)<CommentTagRange>(
    CommentTagRange
)(typia.misc.createValidatePrune<CommentTagRange>());
