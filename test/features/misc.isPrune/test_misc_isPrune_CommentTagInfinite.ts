import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_misc_isPrune_CommentTagInfinite = _test_misc_isPrune(
    "CommentTagInfinite",
)<CommentTagInfinite>(CommentTagInfinite)((input) =>
    typia.misc.isPrune<CommentTagInfinite>(input),
);
