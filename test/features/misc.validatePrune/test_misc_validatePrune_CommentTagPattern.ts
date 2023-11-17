import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_misc_validatePrune_CommentTagPattern =
  _test_misc_validatePrune("CommentTagPattern")<CommentTagPattern>(
    CommentTagPattern,
  )((input) => typia.misc.validatePrune<CommentTagPattern>(input));
