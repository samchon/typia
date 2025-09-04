import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_misc_createIsPrune_CommentTagRange = (): void =>
  _test_misc_isPrune("CommentTagRange")<CommentTagRange>(CommentTagRange)(
    typia.misc.createIsPrune<CommentTagRange>(),
  );
