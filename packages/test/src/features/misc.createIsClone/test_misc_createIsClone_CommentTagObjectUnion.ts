import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_misc_createIsClone_CommentTagObjectUnion = _test_misc_isClone(
  "CommentTagObjectUnion",
)<CommentTagObjectUnion>(CommentTagObjectUnion)(
  typia.misc.createIsClone<CommentTagObjectUnion>(),
);
