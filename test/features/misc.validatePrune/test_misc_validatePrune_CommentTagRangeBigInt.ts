import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_misc_validatePrune_CommentTagRangeBigInt =
  _test_misc_validatePrune("CommentTagRangeBigInt")<CommentTagRangeBigInt>(
    CommentTagRangeBigInt,
  )((input) => typia.misc.validatePrune<CommentTagRangeBigInt>(input));
