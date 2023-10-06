import typia from "../../../src";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_misc_createValidatePrune_CommentTagInfinite = _test_misc_validatePrune(
    "CommentTagInfinite",
)<CommentTagInfinite>(
    CommentTagInfinite
)(typia.misc.createValidatePrune<CommentTagInfinite>());
