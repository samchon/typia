import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_createAssertEquals_CommentTagObjectUnion = _test_assertEquals(
  TypeGuardError,
)("CommentTagObjectUnion")<CommentTagObjectUnion>(CommentTagObjectUnion)(
  typia.createAssertEquals<CommentTagObjectUnion>(),
);
