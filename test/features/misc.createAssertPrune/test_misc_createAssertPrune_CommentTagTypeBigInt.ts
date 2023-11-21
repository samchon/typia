import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_misc_createAssertPrune_CommentTagTypeBigInt =
  _test_misc_assertPrune("CommentTagTypeBigInt")<CommentTagTypeBigInt>(
    CommentTagTypeBigInt,
  )(typia.misc.createAssertPrune<CommentTagTypeBigInt>());
