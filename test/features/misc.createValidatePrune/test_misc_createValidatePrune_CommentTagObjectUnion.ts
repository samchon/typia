import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_misc_createValidatePrune_CommentTagObjectUnion =
  _test_misc_validatePrune("CommentTagObjectUnion")<CommentTagObjectUnion>(
    CommentTagObjectUnion,
  )(typia.misc.createValidatePrune<CommentTagObjectUnion>());
