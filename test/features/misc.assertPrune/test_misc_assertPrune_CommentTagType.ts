import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_misc_assertPrune_CommentTagType = _test_misc_assertPrune(
  "CommentTagType",
)<CommentTagType>(CommentTagType)((input) =>
  typia.misc.assertPrune<CommentTagType>(input),
);
