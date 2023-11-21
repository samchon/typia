import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_misc_assertPrune_CommentTagLength = _test_misc_assertPrune(
  "CommentTagLength",
)<CommentTagLength>(CommentTagLength)((input) =>
  typia.misc.assertPrune<CommentTagLength>(input),
);
