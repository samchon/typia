import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_misc_validatePrune_CommentTagLength =
    _test_misc_validatePrune("CommentTagLength")<CommentTagLength>(
        CommentTagLength,
    )((input) => typia.misc.validatePrune<CommentTagLength>(input));
