import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_misc_createPrune_CommentTagLength = _test_misc_prune(
  "CommentTagLength",
)<CommentTagLength>(CommentTagLength)(
  typia.misc.createPrune<CommentTagLength>(),
);
