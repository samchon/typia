import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_misc_assertClone_CommentTagFormat = _test_misc_assertClone(
    "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)((input) =>
    typia.misc.assertClone<CommentTagFormat>(input),
);
