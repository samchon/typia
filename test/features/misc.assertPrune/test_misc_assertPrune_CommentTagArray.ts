import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_misc_assertPrune_CommentTagArray = _test_misc_assertPrune(
  "CommentTagArray",
)<CommentTagArray>(CommentTagArray)((input) =>
  typia.misc.assertPrune<CommentTagArray>(input),
);
