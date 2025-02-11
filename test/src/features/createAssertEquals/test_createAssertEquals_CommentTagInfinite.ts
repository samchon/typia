import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_createAssertEquals_CommentTagInfinite = _test_assertEquals(
  TypeGuardError,
)("CommentTagInfinite")<CommentTagInfinite>(CommentTagInfinite)(
  typia.createAssertEquals<CommentTagInfinite>(),
);
