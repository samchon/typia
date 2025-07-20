import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_misc_createPrune_CommentTagRange = (): void =>
  _test_misc_prune("CommentTagRange")<CommentTagRange>(CommentTagRange)(
    typia.misc.createPrune<CommentTagRange>(),
  );
