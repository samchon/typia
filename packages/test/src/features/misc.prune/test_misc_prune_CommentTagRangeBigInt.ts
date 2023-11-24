import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_misc_prune_CommentTagRangeBigInt = _test_misc_prune(
  "CommentTagRangeBigInt",
)<CommentTagRangeBigInt>(CommentTagRangeBigInt)((input) =>
  typia.misc.prune<CommentTagRangeBigInt>(input),
);
