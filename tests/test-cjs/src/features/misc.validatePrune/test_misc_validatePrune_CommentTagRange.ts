import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_misc_validatePrune_CommentTagRange = (): void =>
  _test_misc_validatePrune("CommentTagRange")<CommentTagRange>(CommentTagRange)(
    (input) => typia.misc.validatePrune<CommentTagRange>(input),
  );
