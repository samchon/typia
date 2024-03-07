import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_CommentTagObjectUnion =
  _test_misc_assertClone(TypeGuardError)(
    "CommentTagObjectUnion",
  )<CommentTagObjectUnion>(CommentTagObjectUnion)(
    typia.misc.createAssertClone<CommentTagObjectUnion>(),
  );
