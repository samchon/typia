import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_misc_prune_CommentTagPattern = (): void =>
  _test_misc_prune("CommentTagPattern")<CommentTagPattern>(CommentTagPattern)(
    (input) => typia.misc.prune<CommentTagPattern>(input),
  );
