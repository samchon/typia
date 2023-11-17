import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_misc_createValidatePrune_CommentTagFormat =
  _test_misc_validatePrune("CommentTagFormat")<CommentTagFormat>(
    CommentTagFormat,
  )(typia.misc.createValidatePrune<CommentTagFormat>());
