import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_createAssertEquals_CommentTagLength = _test_assertEquals(
  TypeGuardError,
)("CommentTagLength")<CommentTagLength>(CommentTagLength)(
  typia.createAssertEquals<CommentTagLength>(),
);
