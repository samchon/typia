import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_misc_isPrune_CommentTagArray = _test_misc_isPrune(
  "CommentTagArray",
)<CommentTagArray>(CommentTagArray)((input) =>
  typia.misc.isPrune<CommentTagArray>(input),
);
