import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_misc_assertClone_CommentTagObjectUnion =
  _test_misc_assertClone(TypeGuardError)(
    "CommentTagObjectUnion",
  )<CommentTagObjectUnion>(CommentTagObjectUnion)((input) =>
    typia.misc.assertClone<CommentTagObjectUnion>(input),
  );
