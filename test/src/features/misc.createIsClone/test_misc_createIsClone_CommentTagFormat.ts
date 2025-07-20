import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_misc_createIsClone_CommentTagFormat = (): void =>
  _test_misc_isClone("CommentTagFormat")<CommentTagFormat>(CommentTagFormat)(
    typia.misc.createIsClone<CommentTagFormat>(),
  );
