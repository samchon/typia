import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_misc_prune_CommentTagNaN = _test_misc_prune(
    "CommentTagNaN",
)<CommentTagNaN>(CommentTagNaN)((input) =>
    typia.misc.prune<CommentTagNaN>(input),
);
