import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_misc_validateClone_CommentTagArray = _test_misc_validateClone(
    "CommentTagArray",
)<CommentTagArray>(CommentTagArray)((input) =>
    typia.misc.validateClone<CommentTagArray>(input),
);
