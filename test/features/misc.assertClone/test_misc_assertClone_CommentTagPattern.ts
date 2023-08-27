import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_misc_assertClone_CommentTagPattern = _test_misc_assertClone(
    "CommentTagPattern",
)<CommentTagPattern>(CommentTagPattern)((input) =>
    typia.misc.assertClone<CommentTagPattern>(input),
);
