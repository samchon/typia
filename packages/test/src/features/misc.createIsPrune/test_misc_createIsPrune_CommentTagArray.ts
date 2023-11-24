import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_misc_createIsPrune_CommentTagArray = _test_misc_isPrune(
  "CommentTagArray",
)<CommentTagArray>(CommentTagArray)(
  typia.misc.createIsPrune<CommentTagArray>(),
);
