import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_misc_createPrune_CommentTagDefault = (): void =>
  _test_misc_prune("CommentTagDefault")<CommentTagDefault>(CommentTagDefault)(
    typia.misc.createPrune<CommentTagDefault>(),
  );
