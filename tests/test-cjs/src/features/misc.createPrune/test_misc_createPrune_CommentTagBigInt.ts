import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_misc_createPrune_CommentTagBigInt = (): void =>
  _test_misc_prune("CommentTagBigInt")<CommentTagBigInt>(CommentTagBigInt)(
    typia.misc.createPrune<CommentTagBigInt>(),
  );
