import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_misc_createPrune_CommentTagRangeBigInt = _test_misc_prune(
  "CommentTagRangeBigInt",
)<CommentTagRangeBigInt>(CommentTagRangeBigInt)(
  typia.misc.createPrune<CommentTagRangeBigInt>(),
);
