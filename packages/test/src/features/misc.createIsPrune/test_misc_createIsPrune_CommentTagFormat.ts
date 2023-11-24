import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_misc_createIsPrune_CommentTagFormat = _test_misc_isPrune(
  "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)(
  typia.misc.createIsPrune<CommentTagFormat>(),
);
