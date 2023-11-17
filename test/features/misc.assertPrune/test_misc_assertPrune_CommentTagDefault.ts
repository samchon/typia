import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_misc_assertPrune_CommentTagDefault = _test_misc_assertPrune(
  "CommentTagDefault",
)<CommentTagDefault>(CommentTagDefault)((input) =>
  typia.misc.assertPrune<CommentTagDefault>(input),
);
