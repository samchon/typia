import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_misc_createAssertPrune_CommentTagBigInt =
  _test_misc_assertPrune("CommentTagBigInt")<CommentTagBigInt>(
    CommentTagBigInt,
  )(typia.misc.createAssertPrune<CommentTagBigInt>());
