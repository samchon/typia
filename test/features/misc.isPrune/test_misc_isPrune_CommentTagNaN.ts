import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_misc_isPrune_CommentTagNaN = _test_misc_isPrune(
  "CommentTagNaN",
)<CommentTagNaN>(CommentTagNaN)((input) =>
  typia.misc.isPrune<CommentTagNaN>(input),
);
