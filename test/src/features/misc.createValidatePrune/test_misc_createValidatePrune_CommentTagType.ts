import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_misc_createValidatePrune_CommentTagType =
  _test_misc_validatePrune("CommentTagType")<CommentTagType>(CommentTagType)(
    typia.misc.createValidatePrune<CommentTagType>(),
  );
