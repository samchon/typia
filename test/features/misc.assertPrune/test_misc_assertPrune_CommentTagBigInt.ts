import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_misc_assertPrune_CommentTagBigInt = _test_misc_assertPrune(
  "CommentTagBigInt",
)<CommentTagBigInt>(CommentTagBigInt)((input) =>
  typia.misc.assertPrune<CommentTagBigInt>(input),
);
