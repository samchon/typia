import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_createAssertEquals_CommentTagFormat = _test_assertEquals(
  TypeGuardError,
)("CommentTagFormat")<CommentTagFormat>(CommentTagFormat)(
  typia.createAssertEquals<CommentTagFormat>(),
);
