import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_misc_createIsPrune_CommentTagBigInt = (): void =>
  _test_misc_isPrune("CommentTagBigInt")<CommentTagBigInt>(CommentTagBigInt)(
    typia.misc.createIsPrune<CommentTagBigInt>(),
  );
