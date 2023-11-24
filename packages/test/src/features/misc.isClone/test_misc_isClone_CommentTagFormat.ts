import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_misc_isClone_CommentTagFormat = _test_misc_isClone(
  "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)((input) =>
  typia.misc.isClone<CommentTagFormat>(input),
);
