import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_misc_createPrune_CommentTagTypeBigInt = _test_misc_prune(
  "CommentTagTypeBigInt",
)<CommentTagTypeBigInt>(CommentTagTypeBigInt)(
  typia.misc.createPrune<CommentTagTypeBigInt>(),
);
