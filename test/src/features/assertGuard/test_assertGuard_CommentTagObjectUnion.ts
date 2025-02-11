import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_assertGuard_CommentTagObjectUnion = _test_assertGuard(
  TypeGuardError,
)("CommentTagObjectUnion")<CommentTagObjectUnion>(CommentTagObjectUnion)(
  (input) => typia.assertGuard<CommentTagObjectUnion>(input),
);
