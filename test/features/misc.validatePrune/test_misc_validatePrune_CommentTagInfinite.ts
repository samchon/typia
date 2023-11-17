import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_misc_validatePrune_CommentTagInfinite =
  _test_misc_validatePrune("CommentTagInfinite")<CommentTagInfinite>(
    CommentTagInfinite,
  )((input) => typia.misc.validatePrune<CommentTagInfinite>(input));
