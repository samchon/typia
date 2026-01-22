import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_misc_prune_CommentTagFormat = (): void =>
  _test_misc_prune("CommentTagFormat")<CommentTagFormat>(CommentTagFormat)(
    (input) => typia.misc.prune<CommentTagFormat>(input),
  );
