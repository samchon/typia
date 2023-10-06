import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_misc_validateClone_CommentTagType = _test_misc_validateClone(
    "CommentTagType",
)<CommentTagType>(CommentTagType)((input) =>
    typia.misc.validateClone<CommentTagType>(input),
);
