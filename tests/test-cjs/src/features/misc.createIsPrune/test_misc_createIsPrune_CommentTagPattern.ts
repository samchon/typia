import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_misc_createIsPrune_CommentTagPattern = (): void =>
  _test_misc_isPrune("CommentTagPattern")<CommentTagPattern>(CommentTagPattern)(
    typia.misc.createIsPrune<CommentTagPattern>(),
  );
