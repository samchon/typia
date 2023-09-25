import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_misc_createValidatePrune_CommentTagPattern =
    _test_misc_validatePrune("CommentTagPattern")<CommentTagPattern>(
        CommentTagPattern,
    )(typia.misc.createValidatePrune<CommentTagPattern>());
