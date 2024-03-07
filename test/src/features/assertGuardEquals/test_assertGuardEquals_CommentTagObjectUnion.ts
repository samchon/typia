import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_CommentTagObjectUnion =
  _test_assertGuardEquals(TypeGuardError)(
    "CommentTagObjectUnion",
  )<CommentTagObjectUnion>(CommentTagObjectUnion)((input) =>
    typia.assertGuardEquals<CommentTagObjectUnion>(input),
  );
