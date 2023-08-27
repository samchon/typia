import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_misc_isClone_CommentTagLength = _test_misc_isClone(
    "CommentTagLength",
)<CommentTagLength>(CommentTagLength)((input) =>
    typia.misc.isClone<CommentTagLength>(input),
);
