import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_misc_createClone_CommentTagRange = (): void =>
  _test_misc_clone("CommentTagRange")<CommentTagRange>(CommentTagRange)(
    typia.misc.createClone<CommentTagRange>(),
  );
