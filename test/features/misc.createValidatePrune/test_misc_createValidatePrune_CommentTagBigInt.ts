import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_misc_createValidatePrune_CommentTagBigInt =
  _test_misc_validatePrune("CommentTagBigInt")<CommentTagBigInt>(
    CommentTagBigInt,
  )(typia.misc.createValidatePrune<CommentTagBigInt>());
