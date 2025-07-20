import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_misc_createIsClone_CommentTagLength = (): void =>
  _test_misc_isClone("CommentTagLength")<CommentTagLength>(CommentTagLength)(
    typia.misc.createIsClone<CommentTagLength>(),
  );
