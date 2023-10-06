import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_misc_validatePrune_CommentTagArray = _test_misc_validatePrune(
    "CommentTagArray",
)<CommentTagArray>(CommentTagArray)((input) =>
    typia.misc.validatePrune<CommentTagArray>(input),
);
