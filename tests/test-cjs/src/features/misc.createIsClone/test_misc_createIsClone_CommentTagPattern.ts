import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_misc_createIsClone_CommentTagPattern = (): void =>
  _test_misc_isClone("CommentTagPattern")<CommentTagPattern>(CommentTagPattern)(
    typia.misc.createIsClone<CommentTagPattern>(),
  );
