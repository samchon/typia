import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_misc_isPrune_CommentTagBigInt = _test_misc_isPrune(
  "CommentTagBigInt",
)<CommentTagBigInt>(CommentTagBigInt)((input) =>
  typia.misc.isPrune<CommentTagBigInt>(input),
);
