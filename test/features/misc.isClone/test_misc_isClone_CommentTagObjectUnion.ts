import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_misc_isClone_CommentTagObjectUnion = _test_misc_isClone(
    "CommentTagObjectUnion",
)<CommentTagObjectUnion>(CommentTagObjectUnion)((input) =>
    typia.misc.isClone<CommentTagObjectUnion>(input),
);
